var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET flights listing. */
router.get("/new", flightsCtrl.new);

router.post("/", flightsCtrl.create);

router.get("/:id", flightsCtrl.show);

module.exports = router;
