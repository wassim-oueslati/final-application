// Require express
const express = require('express');

// Require cookie-parser
const cookieParser = require("cookie-parser");

// Require connectDB
const connectDB = require('./config/connectDB');

// Require the router
const authCandidateRouter = require('./routes/authCandidate');
const authRecruiterRouter = require('./routes/authRecruiter');
const jobs = require("./routes/jobs");
const cvs = require("./routes/cv");
const profiles = require("./routes/ProfileCandidate");
const guests = require("./routes/guests");


// Init express
const app = express();

// Middleware ==> Parse The Data To json
app.use(express.json());

app.use(cookieParser());

// connectDB
connectDB();

// Use routes
app.use('/api/auth', authCandidateRouter);
app.use('/api/authRec', authRecruiterRouter);
app.use('/api/jobs', jobs);
app.use('/api/cv', cvs);
app.use('/api/guest', guests);
app.use('/api/profile', profiles)


// Create port
const port = process.env.PORT || 5000;

// Launch the serveer
app.listen(port, (error) =>
  error
  ? console.log(error)
  : console.log(`The server is running on port ${port}`)
);