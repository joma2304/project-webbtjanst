const express = require("express");
const router = express.Router();
const Starter = require('../models/menu/starter');
const MainCourse = require('../models/menu/mainCourse');
const Dessert = require('../models/menu/dessert');
const Beer = require('../models/drinks/beer');
const Wine = require('../models/drinks/wine');
const NonAlcoholic = require('../models/drinks/nonAlcoholic');
require("dotenv").config();

// GET: Hämta förrätter
router.get('/starter', async (req, res) => {
  try {
    // Hämta förrätter från databasen
    const starters = await Starter.find();
    return res.json(starters);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET: Hämta huvudrätter
router.get('/maincourse', async (req, res) => {
  try {
    // Hämta huvudrätter från databasen
    const mainCourse = await MainCourse.find();
    return res.json(mainCourse);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET: Hämta efterrätter
router.get('/dessert', async (req, res) => {
  try {
    // Hämta efterrätter från databasen
    const desserts = await Dessert.find();
    return res.json(desserts);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET: Hämta öl
router.get('/beer', async (req, res) => {
  try {
    // Hämta öl från databasen
    const beers = await Beer.find();
    return res.json(beers);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET: Hämta vin
router.get('/wine', async (req, res) => {
  try {
    // Hämta vin från databasen
    const wines = await Wine.find();
    return res.json(wines);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET: Hämta alkoholfritt
router.get('/nonalcoholic', async (req, res) => {
  try {
    // Hämta alkoholfritt från databasen
    const nonAlcoholic = await NonAlcoholic.find();
    return res.json(nonAlcoholic);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
