// model
const { Repair } = require('../models/repairModel');
const { User } = require('../models/userModel');

const getAppointments = async (req, res) => {
  try {
    //instance of Repair
    const appointments = await Repair.findAll({
      include: [{ model: User }],
    });
    res.status(200).json({ appointments });
  } catch (err) {
    console.log(err);
  }
};
const createAppointment = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
const getAppointmentById = async (req, res) => {
  try {
    //validate if user id not exists
    const { appointment } = req;
    res.status(200).json({ appointment }); //or empty obj
  } catch (err) {
    console.log(err);
  }
};
// PATCH update status to completed
const updateAppointment = async (req, res) => {
  try {
    //validate if user id not exists
    const { appointment } = req;
    // set new  status value
    await appointment.update({ status: 'completed' });
    res.status(201).json({ status: 'success' }); //or empty obj
  } catch (err) {
    console.log(err);
  }
};
// DELETE update status to cancelled
const softDeleteAppointment = async (req, res) => {
  try {
    //validate if user id not exists
    const { appointment } = req;
    // set new  status value
    await appointment.update({ status: 'cancelled' });
    res.status(201).json({ status: ' the appointment was cancelled' }); //or empty obj
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  softDeleteAppointment,
};
