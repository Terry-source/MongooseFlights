const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'LAX', 'SEA', 'SAN'],
        required: true,
    },
    arrival: {
        type: Date,
        required: true,
    },
});

module.exports = destinationSchema;