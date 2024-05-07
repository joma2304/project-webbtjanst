const mongoose = require("mongoose");

//Schema för förrätt
const starterSchema = new mongoose.Schema({
    starterName: {
        type: String,
        required: true, //Måste finnas
    },
    starterPrice: {
        type: Number,
        required: true, //Måste finnas
        min: 0, //Minsta pris
    }
});

const Starter = mongoose.model("Starter", starterSchema);
module.exports = Starter;