const Flight = require('../models/flight');

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);

    flight.tickets.push(req.body);

    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }

    res.redirect(`/flights/${flight._id}`);
}

async function newTicket(req, res) {

    const flight = await Flight.findById(req.params.id);
    const flightId = req.params.id;

    console.log(req.baseUrl);

    res.render("tickets/new", {
        title: "Add New Flight",
        errorMsg: "",
        flight,
        flightId,
    });
}

// flight,
// flightId,

module.exports = {
    create,
    new: newTicket,
};