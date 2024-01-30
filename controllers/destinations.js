const Flights = require('../models/flight');

module.exports = {
    create,
    // delete: deleteDestination,
};

async function create(req, res) {
    const flight = await Flights.findById(req.params.id);
    
    flight.destinations.push(req.body);

    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    
    res.redirect(`/flights/${flight._id}`);
}