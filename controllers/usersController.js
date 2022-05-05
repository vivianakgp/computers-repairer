//model
const { User } = require('../models/userModel');
// handler errors
const { handlerErr } = require('../utils/handleErr');

const getUsers = handlerErr(async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ users });
});

const createUser = handlerErr(async (req, res, next) => {
  // get data from request
  const { name, email, password, role } = req.body;
  // instance each user
  const newUser = await User.create({ name, email, password, role });
  res.status(201).json({ newUser });
});
// get user by id, SELECT * FROM users WHERE id==?
const getUserById = handlerErr(async (req, res, next) => {
  // middleware here
  const { user } = req;
  res.status(200).json({ user });
});
// update name and email
const updateUser = handlerErr(async (req, res, next) => {
  // middleware here
  const { user } = req;
  // get new values from req body
  const { name, email } = req.body;
  await user.update({ name, email });
  res.status(201).json({ status: 'update user success' }); //or empty obj
});
// disable user status
const softDeleteUser = handlerErr(async (req, res, next) => {
  // middleware here
  const { user } = req;
  await user.update({ status: 'unavailable' });
  res.status(201).json({ status: 'delete user success' }); //or empty obj
});

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  softDeleteUser,
};
