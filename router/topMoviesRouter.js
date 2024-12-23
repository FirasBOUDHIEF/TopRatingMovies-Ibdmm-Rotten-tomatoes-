const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/topMovie');

// Route pour afficher tous les films
router.get('/top-movies', moviesController.moviesController);

module.exports = router;
