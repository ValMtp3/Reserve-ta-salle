const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
});
module.exports = mongoose.model('Reservation', ReservationSchema);