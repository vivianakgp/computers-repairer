// modelo/table
const { Repair } = require('../models/repairModel');

const reapirPending = async (req, res, next) => {
  try {
    // get dinamic id
    const { id } = req.params;
    // get the user by id
    const appointment = await Repair.findOne({ where: { id } });
    //validate if user id not exists
    if (!appointment) {
      res.status(404).json({
        status: 'error',
        msg: 'the appointment does not exists',
      });
    } else if (appointment.status != 'pending') {
      res.status(404).json({
        status: 'error',
        msg: 'Repair is completed or  was cancelled',
      });
    } else if (appointment.status === 'pending') {
      req.appointment = appointment;
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { reapirPending };
