// import mongoose, create schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },

  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },

  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: function () {
      const date = new Date();
      const year = date.getFullYear() + 1;
      date.setFullYear(year);
      return date;
    },
  },
});

module.exports = mongoose.model("Flight", flightSchema);
