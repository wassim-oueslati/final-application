// Require express
const express = require("express");

// Require router 
const router = express.Router();

// Require the Profile Schema
const Profile = require("../models/Profile");

// Require multer
const multer  = require('multer');


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



//get request for getting profiles from db
router.get("/", (req, res) => {
  Profile.find()
  .sort({ date: -1 })
  .then(profiles => res.json(profiles));
});


//@route POST profile
router.post('/profilePost', cpUpload , async (req, res)=>{ 
  const { name, lastName, email, location, work, experience, age, gender, description } = req.body;
    const newProfile = new Profile({
      name,
      lastName,
      email,
      location,
      work,
      experience,
      age,
      gender,
      description,
      uploadCv:req.files.uploadCv[0].originalname,
      profilePic:req.files.profilePic[0].originalname
  });
  newProfile.save().then(profiles => res.json(profiles))
});

module.exports = router;