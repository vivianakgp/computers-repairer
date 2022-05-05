const express = require('express');
const Router = express.Router();
//contoller
const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  softDeleteUser,
} = require('../controllers/usersController');
//user middlewares
const { userExists } = require('../middlewares/usersMiddlewares');
const {
  createUserValidations,
  checkValidation,
} = require('../middlewares/validationsMiddleware');

//http://localhost:5000/api/v1/users
//get list of user
Router.get('/', getUsers);
//create new user
Router.post('/', createUserValidations, checkValidation, createUser);
//with dinamic id
Router.use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(softDeleteUser);

module.exports = { usersRouter: Router };
