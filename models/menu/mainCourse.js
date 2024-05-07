const mongoose = require("mongoose");

//Schema för huvudrätt
const mainCourseSchema = new mongoose.Schema({
    mainCourseName: {
        type: String,
        required: true, //Måste finnas
    },
    mainCoursePrice: {
        type: Number,
        required: true, //Måste finnas
        min: 0, //Minsta pris
    }
});

const MainCourse = mongoose.model("MainCourse", mainCourseSchema);
module.exports = MainCourse;