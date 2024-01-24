const Flights = require('../models/flight');

async function index(req, res, next) {
    const flights = await Flights.find({});

    res.render('index', {
        title: 'All Flights',
        flights,
    });
}


module.exports = {
    index,
};