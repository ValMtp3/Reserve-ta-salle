const express = require('express');
const { createRoom, getRooms } = require('../controllers/roomController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/rooms', authMiddleware, createRoom);
router.get('/rooms', authMiddleware, getRooms);

module.exports = router;