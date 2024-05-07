const mongoose = require("mongoose");

//Schema för efterrät
const nonAlcoholicSchema = new mongoose.Schema({
    nonAlcoholicName: {
        type: String,
        required: true, //Måste finnas
    },
    nonAlcoholicPrice: {
        type: Number,
        required: true, //Måste finnas
        min: 0, //Minsta pris
    }
});

const NonAlcoholic = mongoose.model("NonAlcoholic", nonAlcoholicSchema);
module.exports = NonAlcoholic;