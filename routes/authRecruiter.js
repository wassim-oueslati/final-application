// Require router from express
const router = require('express').Router();

// Require bcrypt
const bcrypt = require('bcrypt');

// Require the json web token
const jwt = require('jsonwebtoken');

// Require the Recruiter Schema
const Recruiter = require('../models/Recruiter');

// Require the isAuthRec middleware
const isAuthRec = require('../middlewares/isAuthRec');

require('dotenv').config({ path: './config/.env' });

// Require nodemailer
const nodemailer = require('nodemailer')

// Require multer
const multer  = require('multer');

// Require crypto
const crypto = require('crypto')


// require validators
const {
  validator,
  loginRules,
  registerRecRules
} = require('../middlewares/validator');

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD
  }
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage }); 


//@route POST /api/authRec/registerRecruiter
//@desc Register new recruiter
//@access Public
router.post('/registerRecruiter',upload.single("companyLogo"),registerRecRules(), validator ,  async (req, res) => {
  const {email, password, companyName, business, description, location, employees, dateOfCreation} = req.body;
  try {
    // Check for existing recruiter
    let recruiter = await Recruiter.findOne({ email });

    if (recruiter) {
      return res.status(400).json({ msg: 'Recruiter already exists' });
    }

    // Create new Recruiter
    recruiter = new Recruiter({email, password, companyName, business, description, location, employees, dateOfCreation, companyLogo:req.file.originalname });

    // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    // Replace recruiter password with hashed password
    recruiter.password = hashedPassword;

    // Save the recruiter
    await recruiter.save();

    // sign recruiter
    const payload = {
      id: recruiter._id,
    };

    // Generate token
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: '7 days',
    });

    res
    .cookie("token", token, { httpOnly: true })
    .status(200).send({ msg: 'Recruiter registred with success', recruiter });
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});



//@route POST /api/authRec/loginRecruiter
//@desc Login Recruiter
//@access Public
router.post('/loginRecruiter', loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check for existing recruiter
    let recruiter = await Recruiter.findOne({ email });

    if (!recruiter) {
      return res.status(400).send({ msg: 'Bad Credentials! email' });
    }

    //Check password
    const isMatch = await bcrypt.compare(password, recruiter.password);

    if (!isMatch) {
      return res.status(400).send({ msg: 'Bad Credentials! password' });
    }

    // sing recruiter
    const payload = {
      id: recruiter._id,
    };

    // Generate token
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: '7 days',
    });
  
    res
    .cookie("token", token, { httpOnly: true })
    .send({ msg: 'Logged in with success', recruiter });
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});


//@route POST forgotPassword
//@desc forgot password Recruiter
//@access Public
router.post('/forgotPassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
        console.log(err)
      }
      const token = buffer.toString("hex")
      Recruiter.findOne({email:req.body.email})
      .then(recruiter=>{
          if(!recruiter){
            return res.status(400).send({ msg: 'Bad Credentials! email' });
          }
          recruiter.resetToken = token
          // recruiter.expireToken = (Date.now() + 3600000)
          recruiter.save().then((result)=>{
              transporter.sendMail({
                  to:recruiter.email,
                  from:"no-replay@gmail.com",
                  subject:"password reset",
                  html:`
                  <p>You requested for password reset</p>
                  <h3>Click on this <a href="${process.env.CLIENT_URL}/resetPass/${token}">link</a> to reset your password</h3>
                  `
              },function(err,res){
                if(err){
                  console.log('error occurs')
                }
                else{console.log("message sent !")}
                })
              res.status(400).send({ msg: 'Please check your mail box we sent you a link to reset your password !!!' });
          })
      })
  })
})



//@route POST resetPassword
//@desc reset password Recruiter
//@access Public
router.post('/resetPassword',(req,res)=>{
  const newPassword = req.body.password
  const sentToken = req.body.token
  Recruiter.findOne({resetToken:sentToken})
  .then(recruiter=>{
      if(!recruiter){
        return res.status(400).send({msg:"Try again session expired"})
      }
      bcrypt.hash(newPassword,12).then(hashedpassword=>{
         recruiter.password = hashedpassword
         recruiter.resetToken = undefined
        //  recruiter.expireToken = undefined
         recruiter.save().then((savedrecruiter)=>{
            res.status(400).send({msg:"password updated success"})
         })
      })
  }).catch(err=>{
      console.log(err)
  })
})


//@route GET api/auth/recruiter
//@desc Get authentified recruiter
//@access Private
router.get('/recruiter', isAuthRec, (req, res) => {
  res.status(200).send({ recruiter: req.recruiter });
});

// logout recruiter
router.get("/logout", (req, res) => {
  res
  .clearCookie("token")
  .send();
});

//get recruiter profile by id
router.get("/:id",(req,res)=>{
  const {id}=req.params
  Recruiter.findOne({_id:id})
  .then(recruiterProfile => res.send({msg:"get recruiter Profile by id",recruiterProfile}))
  .catch(err=>console.log(err))
})


//edit recruiter profile
router.put("/editRecruiterProfile/:_id", upload.single("companyLogo"), async(req,res)=>{
  const{_id}=req.params
  const {email, password, companyName, business, description, location, employees, dateOfCreation }=req.body
  // const {companyLogo} = req.file.originalname
  try{
 const recruiterProfile =  await Recruiter.findOneAndUpdate({_id},{$set:{email, password, companyName, business, description, location, employees, dateOfCreation, companyLogo:req.file.originalname }},{new : true})

  res.send({msg:"recruiter Profile edited",recruiterProfile})
  }
  catch (error){
    console.log(error)
  }
})

module.exports = router;