const express = require('express');
const { createReservation, getReservations } = require('../controllers/reservationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/reservations', authMiddleware, createReservation);
router.get('/reservations', authMiddleware, getReservations);

module.exports = router;