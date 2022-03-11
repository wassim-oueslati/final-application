// require mongoose
const mongoose = require('mongoose');

// Require Schema from mongoose
const Schema = mongoose.Schema;

// Create the recruiter schema
const recruiterSchema = new Schema({
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
  companyName: { type: String, required: true },
  business: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  employees: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  dateOfCreation: { type: Date},
  companyLogo:{type: String},
  resetToken: {type: String},
});

module.exports = Recruiter = mongoose.model('Recruiter', recruiterSchema);