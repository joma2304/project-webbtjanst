const express = require("express");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();
const Starter = require('../models/menu/starter');
const MainCourse = require('../models/menu/mainCourse');
const Dessert = require('../models/menu/dessert');
const Beer = require('../models/drinks/beer');
const Wine = require('../models/drinks/wine');
const NonAlcoholic = require('../models/drinks/nonAlcoholic');
const Booking = require('../models/bookings/booking')

//Förrätter
//POST: Lägg till förrätt
router.post("/starter", async (req, res) => {
    try {
        const starterList = await Starter.create(req.body); 

        return res.json(starterList);
    } catch (error) {
        return res.status(400).json(error);
    }

});

// PUT: Uppdatera förrätt
router.put("/starter/:id", async (req, res) => {
    try {
        const updatedStarter = await Starter.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedStarter);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE: Ta bort förrätt
router.delete("/starter/:id", async (req, res) => {
    try {
        await Starter.findByIdAndDelete(req.params.id);
        return res.json({ message: "Starter deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//Huvudrätter
//POST: Lägg till huvudrätt
router.post("/maincourse", async (req, res) => {
    try {
        const mainCourseList = await MainCourse.create(req.body); 

        return res.json(mainCourseList);
    } catch (error) {
        return res.status(400).json(error);
    }

});

// PUT: Uppdatera huvudrätt
router.put("/maincourse/:id", async (req, res) => {
    try {
        const updatedMainCourse = await MainCourse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedMainCourse);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE: Ta bort huvudrätt
router.delete("/maincourse/:id", async (req, res) => {
    try {
        await MainCourse.findByIdAndDelete(req.params.id);
        return res.json({ message: "Maincourse deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//POST: Lägg till efterrätt
router.post("/dessert", async (req, res) => {
    try {
        const dessertList = await Dessert.create(req.body); 

        return res.json(dessertList);
    } catch (error) {
        return res.status(400).json(error);
    }

});

// PUT: Uppdatera efterrätt
router.put("/dessert/:id", async (req, res) => {
    try {
        const updatedDessert = await Dessert.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedDessert);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE: Ta bort efterrätt
router.delete("/dessert/:id", async (req, res) => {
    try {
        await Dessert.findByIdAndDelete(req.params.id);
        return res.json({ message: "Dessert deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//POST: Lägg till öl
router.post("/beer", async (req, res) => {
    try {
        const beerList = await Beer.create(req.body); 

        return res.json(beerList);
    } catch (error) {
        return res.status(400).json(error);
    }

});

// PUT: Uppdatera förrätt
router.put("/beer/:id", async (req, res) => {
    try {
        const updatedBeer = await Beer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedBeer);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE: Ta bort förrätt
router.delete("/beer/:id", async (req, res) => {
    try {
        await Beer.findByIdAndDelete(req.params.id);
        return res.json({ message: "Beer deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//POST: Lägg till vin
router.post("/wine", async (req, res) => {
    try {
        const wineList = await Wine.create(req.body); 

        return res.json(wineList);
    } catch (error) {
        return res.status(400).json(error);
    }

});

// PUT: Uppdatera förrätt
router.put("/wine/:id", async (req, res) => {
    try {
        const updatedWine = await Wine.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedWine);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE: Ta bort förrätt
router.delete("/wine/:id", async (req, res) => {
    try {
        await Wine.findByIdAndDelete(req.params.id);
        return res.json({ message: "Wine deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//POST: Lägg till alkoholfritt
router.post("/nonalcoholic", async (req, res) => {
    try {
        const nonalcoholicList = await NonAlcoholic.create(req.body); 

        return res.json(nonalcoholicList);
    } catch (error) {
        return res.status(400).json(error);
    }

});

// PUT: Uppdatera förrätt
router.put("/nonalcoholic/:id", async (req, res) => {
    try {
        const updatedNonAlcoholic = await NonAlcoholic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(updatedNonAlcoholic);
    } catch (error) {
        return res.status(400).json(error);
    }
});

// DELETE: Ta bort förrätt
router.delete("/nonalcoholic/:id", async (req, res) => {
    try {
        await NonAlcoholic.findByIdAndDelete(req.params.id);
        return res.json({ message: "Non alcoholic drink deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
});

//Get: Hämta bokningar
router.get("/booking", async (req, res) => {
    try {
        const bookingList = await Booking.find(); 
  
        return res.json(bookingList);
    } catch (error) {
        return res.status(500).json(error);
    }
  
  });


module.exports = router;