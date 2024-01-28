const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'SAN'],
        required: true,
    },
    arrival: {
        type: Date,
        required: true,
    },
});

module.exports = destinationSchema;