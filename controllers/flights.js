const Flight = require("../models/flight");

async function index(req, res, next) {
  const flights = await Flight.find({}).sort('departs');

  res.render("index", {
    title: "All Flights",
    flights,
  });
}

// function newFlight(req, res) {
//   res.render("flights/new", {
//     title: "Add New Flight",
//     errorMsg: "",
//   });
// }

async function create(req, res) {
  // trim empty strings from req.body
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  try {
    await Flight.create(req.body);
    res.redirect("/");

  } catch (err) {
    console.log(err);
    res.render("flights/new", {
      title: "Add New Flight",
      errorMsg: err.message,
    });
  };
}

async function show(req, res) {

  console.log(req.params.id);

  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Detail', flight });

  // res.redirect("/");

  // try {
  //   const flight = await Flight.findById(req.params.id);
  //   res.render("flights/show", { title: "Flight Detail", flight });
  // } catch (err) {
  //   console.error('Error fetching flight details:', err);
  //   res.redirect("/");
  // }
}

function newFlight(req, res) {
  // const newFlight = new Flight(); // includes the default departure date

  // // Format the date for the datetime-local input
  // const formattedDate = newFlight.departs.toISOString().slice(0, 16);

  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  const formattedDate = (new Date(now - offset)).toISOString().slice(0, 16);

  console.log(formattedDate);

  res.render("flights/new", {
    title: "Add New Flight",
    formattedDate,
    errorMsg: "",
    formattedDate,
  });
}

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};
