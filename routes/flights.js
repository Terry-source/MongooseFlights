var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");
const ticketsCtrl = require('../controllers/tickets');

/* GET flights listing. */
router.get("/new", flightsCtrl.new);

router.post("/", flightsCtrl.create);

router.get("/:id", flightsCtrl.show);

router.get('/:id/tickets/new', ticketsCtrl.new);

router.post('/:id/tickets/', ticketsCtrl.create);

module.exports = router;
