const { body, validationResult } = require('express-validator');

const registerRules = () => [
  body('name', 'Name is required').notEmpty(),
  body('lastName', 'Last name is required').notEmpty(),
  body('email', 'email is required').isEmail(),
  body('password', 'Password must contain 6 characters').isLength({
    min: 6,
    max: 20,
  }),
  body('work', 'Work is required').notEmpty(),
  body('age', 'Age is required').notEmpty(),
  body('gender', 'Gender is required').notEmpty(),
  body('experience', 'Experience is required').notEmpty(),
  body('description', 'Description is required').notEmpty(),
  body('location', 'Location is required').notEmpty(),
];


const registerRecRules = () => [
  body('email', 'email is required').isEmail(),
  body('password', 'Password must contain 6 characters').isLength({
    min: 6,
    max: 20,
  }),
  body('companyName', 'Company Name is required').notEmpty(),
  body('business', 'Business is required').notEmpty(),
  body('description', 'Description is required').notEmpty(),
  body('location', 'Location is required').notEmpty(),
  body('employees', 'Employees number is required').notEmpty(),
];

const loginRules = () => [
  body('email', 'email is required').isEmail(),
  body('password', 'Password must contain 6 characters').isLength({
    min: 6,
    max: 20,
  }),
];

const forgotPasswordRules = () => [
  body('email', 'email is required').isEmail(),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = { validator, registerRules, loginRules ,forgotPasswordRules, registerRecRules};