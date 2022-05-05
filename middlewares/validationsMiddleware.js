const { body, validationResult } = require('express-validator');

const createUserValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at last 8 characters long'),
  body('role').notEmpty().withMessage('Role cannot be empty'),
];
const createAppointmentValidations = [
  body('date').notEmpty().withMessage('Date cannot be empty'),
  body('computerNumber')
    .notEmpty()
    .withMessage('computer Number cannot be empty'),
  body('comments').notEmpty().withMessage('Comment cannot be empty'),
];

const checkValidation = (req, res, next) => {
  //validator result
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);
    const errormsg = messages.join('. ');
    return res.status(404).json({
      status: 'error',
      message: errormsg,
    });
  }
  next();
};

module.exports = {
  createUserValidations,
  createAppointmentValidations,
  checkValidation,
};
