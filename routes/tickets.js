const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const flightsCtrl = require('../controllers/flights');

// router.get('/new', ticketsCtrl.new);
// router.post('/', ticketsCtrl.create);

module.exports = router;