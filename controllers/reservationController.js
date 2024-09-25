const Reservation = require('../models/Reservation');
const Room = require('../models/Room');

exports.createReservation = async (req, res) => {
  const { roomId, date, timeSlot } = req.body;
  const userId = req.user.id;

  try {
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    const reservation = new Reservation({ user: userId, room: roomId, date, timeSlot });
    await reservation.save();

    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user room');
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
