// require mongoose
const mongoose = require('mongoose');

// Create the profile schema
const profileSchema = new mongoose.Schema({
    name: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    location: { type: String },
    work: { type: String },
    experience: { type: String },
    // skills: { type: String },
    date: { type: Date, default: Date.now },
    age: { type: Number },
    gender: { type: String },
    description: { type: String },
    uploadCv: {},
    profilePic:{}
});

module.exports = Profile = mongoose.model("Profile", profileSchema);