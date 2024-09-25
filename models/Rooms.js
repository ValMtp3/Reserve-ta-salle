const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  equipments: { type: [String], required: true },
  size: {type: String, required: true, unique: true},
  status: {
    type: String,
    enum: ['libre', 'semi-rempli', 'complet'],  
    default: 'libre'  
  },
});
module.exports = mongoose.model('Room', RoomSchema);