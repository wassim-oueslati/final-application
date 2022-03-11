// Require express
const express = require("express");

// Require router 
const router = express.Router();

// Require the Cv Schema
const Cv = require("../models/Cv");

// Require multer
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/cvs/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage }); 



//get request for getting cvs from db
router.get("/", (req, res) => {
    Cv.find()
    .sort({ date: -1 })
    .then(cvs => res.json(cvs));
});


//@route POST cv
router.post("/", upload.single("uploadCv"), async (req, res) => {
    const { name, email, location, work, experience, skills, jobemail } = req.body;  
   
    try{
    // Check for existing cv
    let cv = await Cv.findOne({ email });
    if (cv) {
      return res.status(400).json({ msg: 'Cv already exists' });
    }

    // Create new Cv
    cv= new Cv({
      name,
      email,
      location,
      work,
      experience,
      skills,
      jobemail,
      uploadCv:req.file.originalname
    });

    // Save the cv
    await cv.save();

    res.status(200).send({ msg: 'Cv uploaded with success', cv });
    }
   catch (error) {
    res.status(500).send({ msg: 'Server Error' });
  }
});

module.exports = router;