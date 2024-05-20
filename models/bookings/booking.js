const mongoose = require("mongoose");

// Schema för bokningar
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Måste finnas
    },
    phoneNumber: {
        type: Number,
        required: true, // Måste finnas
    },
    numberOfPeople: {
        type: Number,
        required: true, // Måste finnas
    }, 
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;