const mongoose = require("mongoose");

//Schema för efterrät
const wineSchema = new mongoose.Schema({
    wineName: {
        type: String,
        required: true, //Måste finnas
    },
    winePrice: {
        type: Number,
        required: true, //Måste finnas
        min: 0, //Minsta pris
    }
});

const Wine = mongoose.model("Wine", wineSchema);
module.exports = Wine;