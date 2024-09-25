const Room = require('../models/Room');

exports.createRoom = async (req, res) => {
  const { name, capacity, equipments } = req.body;

  try {
    const room = new Room({ name, capacity, equipments });
    await room.save();
    res.status(201).json({ message: 'Room created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};