const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");

router.get("/", moviesController.movies);

module.exports = router;
