const mongoose = require("mongoose");

//Schema för efterrät
const dessertSchema = new mongoose.Schema({
    dessertName: {
        type: String,
        required: true, //Måste finnas
    },
    dessertPrice: {
        type: Number,
        required: true, //Måste finnas
        min: 0, //Minsta pris
    }
});

const Dessert = mongoose.model("Dessert", dessertSchema);
module.exports = Dessert;