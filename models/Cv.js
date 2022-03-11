// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the cv schema
const CvSchema = new Schema({
    name: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    location: { type: String },
    work: { type: String },
    experience: { type: String },
    skills: { type: String },
    date: { type: Date, default: Date.now },
    age: { type: Number },
    gender: { type: String },
    description: { type: String },
    uploadCv: {type:String},
    jobemail:[]
});

module.exports = Cv = mongoose.model("cv", CvSchema);