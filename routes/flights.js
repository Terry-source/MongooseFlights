var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET flights listing. */
router.get("/new", flightsCtrl.new);

module.exports = router;
