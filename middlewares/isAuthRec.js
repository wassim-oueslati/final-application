// require Json web token
const jwt = require('jsonwebtoken');

// Require the recruiter Schema
const Recruiter = require('../models/Recruiter');

const isAuthRec = async (req, res, next) => {
    try {
      const token = req.cookies.token || req.headers['x-auth-token'];
  
      // Check for token
      if (!token)
        return res.status(401).send({ msg: 'No Token, authorization denied' });
  
      // Verify Token
      const decoded = await jwt.verify(token, process.env.secretOrKey);
  
      // Add Recruiter from payload
      const recruiter = await Recruiter.findById(decoded.id);
  
      //Check for recruiter
      if (!recruiter) {
        return res.status(401).send({ msg: 'authorization denied' });
      }
  
      // Create recruiter
      req.recruiter = recruiter;
  
      next();
    } catch (error) {
      res.clearCookie("token");
      return res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = isAuthRec;