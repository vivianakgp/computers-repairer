// model
const { Repair } = require('../models/repairModel');
const { User } = require('../models/userModel');
// handler errors
const { handlerErr } = require('../utils/handleErr');

const getAppointments = handlerErr(async (req, res, next) => {
  //instance of Repair
  const appointments = await Repair.findAll({
    include: [{ model: User }],
  });
  res.status(200).json({ appointments });
});
const createAppointment = handlerErr(async (req, res, next) => {
  //get values from req.body
  const { date, computerNumber, comments, userId } = req.body;
  // create an instance of Repair
  const newAppontment = await Repair.create({
    date,
    computerNumber,
    comments,
    userId,
  });
  res.status(201).json({ newAppontment });
});
const getAppointmentById = handlerErr(async (req, res, next) => {
  //validate if user id not exists
  const { appointment } = req;
  res.status(200).json({ appointment }); //or empty obj
});
// PATCH update status to completed
const updateAppointment = handlerErr(async (req, res, next) => {
  //validate if user id not exists
  const { appointment } = req;
  // set new  status value
  await appointment.update({ status: 'completed' });
  res.status(201).json({ status: 'success' }); //or empty obj
});
// DELETE update status to cancelled
const softDeleteAppointment = handlerErr(async (req, res, next) => {
  //validate if user id not exists
  const { appointment } = req;
  // set new  status value
  await appointment.update({ status: 'cancelled' });
  res.status(201).json({ status: ' the appointment was cancelled' }); //or empty obj
});

module.exports = {
  getAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  softDeleteAppointment,
};
