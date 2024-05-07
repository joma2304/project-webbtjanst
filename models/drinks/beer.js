const mongoose = require("mongoose");

//Schema för öl
const beerSchema = new mongoose.Schema({
    beerName: {
        type: String,
        required: true, //Måste finnas
    },
    beerPrice: {
        type: Number,
        required: true, //Måste finnas
        min: 0, //Minsta pris
    }
});

const Beer = mongoose.model("Beer", beerSchema);
module.exports = Beer;