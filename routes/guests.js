// Require router from express
const router = require('express').Router();

require('dotenv').config({ path: './config/.env' });

// Require nodemailer
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASSWORD
    }
})

//@route POST contactUs
//@access Public
router.post('/contactUs', async(req, res) => {
    try {
    await  transporter.sendMail({
        from: req.body.email,
        to: process.env.EMAIL,
        subject:req.body.email,
        text:` From ${req.body.name},
        ${req.body.message}`,
      },function(err,res){
        if(err){
          console.log('error occurs')
        }
        else{console.log("contact us message sent !")}
        })
        res.status(400).send({ msg: 'Your request has been sent !!!' });  
  
    } catch (error) {
      res.status(500).send({ msg: 'Server Error' });
    }
});

module.exports = router;