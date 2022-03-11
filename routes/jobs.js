// Require express
const express = require("express");

// Require router 
const router = express.Router();

// Require the Job Schema
const Job = require("../models/jobs");

// Require multer
const multer  = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage: storage }); 



//get request for getting jobs from db
router.get("/", (req, res) => {
  Job.find()
  .sort({ date: -1 })
  .then(jobs => res.json(jobs));
});

router.get("/:search", (req, res) => {
  Job.find({ $text: { $search: req.params.search } })
  .sort({ date: -1 })
  .then(jobs => res.json(jobs))
});


//@route POST job
router.post("/",upload.single("companyLogo"), (req, res) => {
  const { companyName, title, experience, description, location, salary, email } = req.body;  
  const job = new Job({
    companyName,
    title,
    experience,
    description,
    location,
    salary,
    email,
    companyLogo:req.file.originalname
  });
  job.save().then(job => res.json(job));
});

module.exports = router;