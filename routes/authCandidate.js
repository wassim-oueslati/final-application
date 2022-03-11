// Require router from express
const router = require('express').Router();

// Require bcrypt
const bcrypt = require('bcrypt');

// Require the json web token
const jwt = require('jsonwebtoken');

// Require the User Schema
const User = require('../models/User');

// Require the isAuth middleware
const isAuth = require('../middlewares/isAuth');

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
  registerRules,
  loginRules,
  forgotPasswordRules,
} = require('../middlewares/validator');


const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD
  }
})



const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => { // setting destination of uploading files        
    if (file.fieldname === "uploadCv") { // if uploading resume
      cb(null, "./client/public/cvs/");
    } else { // else uploading image
      cb(null, "./client/public/uploads/");
    }
  },
  filename: (req, file, cb) => { // naming file
    cb(null, file.originalname);
  }
});


const upload = multer({ storage: fileStorage }); 

const cpUpload = upload.fields([{ name: "profilePic"}, { name: "uploadCv"}])


//@route POST api/auth/register
//@desc Register new user
//@access Public
router.post('/register', cpUpload , async (req, res) => {
  const {name, lastName, email, password, work, age, gender, experience, description, location} = req.body;
  
  try {
    // Check for existing user
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    
    // Create new User
    user = new User({
      name, 
      lastName, 
      email, 
      password, 
      work,  
      age, 
      gender, 
      experience, 
      description, 
      location,
      profilePic:req.files.profilePic[0].originalname, 
      uploadCv:req.files.uploadCv[0].originalname
    });
   
    // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    // Replace user password with hashed password
    user.password = hashedPassword;

    // Save the user
    await user.save();

    // sign user
    const payload = {
      id: user._id,
    };

    // Generate token
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: '7 days',
    });

    res
    .cookie("token", token, { httpOnly: true })
    .status(200).send({ msg: 'User registred with success', user });
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
    console.log(error)
  }
});


//@route POST api/auth/login
//@desc Login User
//@access Public
router.post('/login', loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check for existing user
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ msg: 'Bad Credentials! email' });
    }

    //Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ msg: 'Bad Credentials! password' });
    }

    // sing user
    const payload = {
      id: user._id,
    };

    // Generate token
    const token = await jwt.sign(payload, process.env.secretOrKey, {
      expiresIn: '7 days',
    });
  
    res
    .cookie("token", token, { httpOnly: true })
    .send({ msg: 'Logged in with success', user, token });
  } catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});



//@route POST forgotPassword
//@desc forgot password User
//@access Public
router.post('/forgotPassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
        console.log(err)
      }
      const token = buffer.toString("hex")
      User.findOne({email:req.body.email})
      .then(user=>{
          if(!user){
            return res.status(400).send({ msg: 'Bad Credentials! email' });
          }
          user.resetToken = token
          // user.expireToken = (Date.now() + 3600000)
          user.save().then((result)=>{
              transporter.sendMail({
                  to:user.email,
                  from:"no-replay@gmail.com",
                  subject:"password reset",
                  html:`
                  <p>You requested for password reset</p>
                  <h3>Click on this <a href="${process.env.CLIENT_URL}/reset/${token}">link</a> to reset your password</h3>
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
//@desc reset password User
//@access Public
router.post('/resetPassword',(req,res)=>{
  const newPassword = req.body.password
  const sentToken = req.body.token
  User.findOne({resetToken:sentToken})
  .then(user=>{
      if(!user){
        return res.status(400).send({msg:"Try again session expired"})
      }
      bcrypt.hash(newPassword,12).then(hashedpassword=>{
         user.password = hashedpassword
         user.resetToken = undefined
        //  user.expireToken = undefined
         user.save().then((saveduser)=>{
            res.status(400).send({msg:"password updated success"})
         })
      })
  }).catch(err=>{
      console.log(err)
  })
})



//@route GET api/auth/user
//@desc Get authentified user
//@access Private
router.get('/user', isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});


// logout user
router.get("/logout", (req, res) => {
  res
  .clearCookie("token")
  .send();
});


//get candidate profile by id
router.get("/:id",(req,res)=>{
  const {id}=req.params
  User.findOne({_id:id})
  .then(candidateProfile => res.send({msg:"get candidate Profile by id", candidateProfile}))
  .catch(err=>console.log(err))
})

//edit candidate profile
router.put("/editCandidateProfile/:_id", cpUpload, async(req,res)=>{
  const{_id}=req.params
  const {name, lastName, email, password, work, age, gender, experience, description, location}=req.body
  
  try{
 const candidateProfile =  await User.findOneAndUpdate({_id},{$set:{name, lastName, email, password, work, age, gender, experience, description, location, profilePic: req.files.profilePic[0].originalname, uploadCv: req.files.uploadCv[0].originalname}},{new : true})

  res.send({msg:"Candidate Profile edited",candidateProfile})
  }
  catch (error){
    console.log(error)
  }
})


//delete candidate profile
router.delete("/deleteCandidateProfile/:_id",(req,res)=>{
  const{_id}=req.params
  User.findOneAndDelete({_id})
  .then(candidateProfile => res.send(candidateProfile))
  .catch(err=>console.log(err))
})


// //get request for getting the added candidate profile from db
// router.get("/getCandidateProfile", (req, res) => {
//   User.find()
//   .sort({ date: -1 })
//   .then(users => res.json(users));
// });


// //Add candidate profile to home & recruiter pages
// router.post("/addCandidateProfile/:_id", upload.single("profilePic"), async(req,res)=>{
//   const{_id}=req.params
//   const {name, lastName, email, password, work, age, gender, experience, description, location}=req.body
  
//   try{
//  const candidateProfile =  await User.findOneAndUpdate({_id},{$set:{name, lastName, email, password, work, age, gender, experience, description, location, profilePic: req.file.originalname}},{new : true})

//   res.send({msg:"Candidate Profile added",candidateProfile})
//   }
//   catch (error){
//     console.log(error)
//   }
// })

module.exports = router;