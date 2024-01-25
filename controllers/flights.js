const Flight = require("../models/flight");

async function index(req, res, next) {
  const flights = await Flight.find({});

  res.render("index", {
    title: "All Flights",
    flights,
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Add New Flight", errorMsg: "" });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  try {
    await Flight.create(req.body);
    res.redirect("/flights", { title: "All Flights" });
  } catch (err) {
    console.log(err);
    res.render("flights/new", {
      title: "Add New Flight",
      errorMsg: err.message,
    });
  }
  s;
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render("flights/show", { title: "Flight Detail", flight });
}

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};
