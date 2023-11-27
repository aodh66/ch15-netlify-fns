const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bhp: {
    type: Number,
    required: true,
    max: 10000
  },
  avatar_url: {
    type: String,
    default: "https://static.thenounproject.com/png/449586-200.png",
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;