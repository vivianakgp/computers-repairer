// user model/table
const { User } = require('../models/userModel');

const userExists = async (req, res, next) => {
  try {
    // get dimanic id with express
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    //validate if user id not exists
    if (!user) {
      res.status(404).json({
        status: 'error',
        msg: 'user does not exists',
      });
    }
    //add user data to the req obj
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
  }
};
module.exports = { userExists };
