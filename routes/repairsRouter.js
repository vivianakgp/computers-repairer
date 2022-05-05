const express = require('express');
const Router = express.Router();
// controller
const {
  getAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  softDeleteAppointment,
} = require('../controllers/repairsController');
// middleware
const { reapirPending } = require('../middlewares/repairsMiddlewares');
const {
  createAppointmentValidations,
  checkValidation,
} = require('../middlewares/validationsMiddleware');

//http:localhost:5000/api/v1/repairs
Router.get('/', getAppointments);
Router.post(
  '/',
  createAppointmentValidations,
  checkValidation,
  createAppointment
);
// routes with dinamic id
Router.use('/:id', reapirPending)
  .route('/:id')
  .get(getAppointmentById)
  .patch(updateAppointment)
  .delete(softDeleteAppointment);

module.exports = { repairRouter: Router };
