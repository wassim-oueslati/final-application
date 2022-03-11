// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the job schema
const JobSchema = new Schema({
    companyName: { type: String },
    title: { type: String },
    experience: { type: String },
    description: { type: String },
    location: { type: String },
    salary: { type: Number },
    date: { type: Date, default: Date.now },
    email:{type: String},
    companyLogo:{type: String}
});

module.exports = Job = mongoose.model("job", JobSchema);