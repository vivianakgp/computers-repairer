//model
const { User } = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    // get data from request
    const { name, email, password, role } = req.body;

    // instance each user
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ newUser });
  } catch (err) {
    console.log(err);
  }
};
// get user by id, SELECT * FROM users WHERE id==?
const getUserById = async (req, res) => {
  try {
    // middleware here
    const { user } = req;
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};
// update name and email
const updateUser = async (req, res) => {
  try {
    // middleware here
    const { user } = req;
    // get new values from req body
    const { name, email } = req.body;
    await user.update({ name, email });
    res.status(201).json({ status: 'update user success' }); //or empty obj
  } catch (err) {
    console.log(err);
  }
};
// disable user status
const softDeleteUser = async (req, res) => {
  try {
    // middleware here
    const { user } = req;
    await user.update({ status: 'unavailable' });
    res.status(201).json({ status: 'delete user success' }); //or empty obj
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  softDeleteUser,
};
