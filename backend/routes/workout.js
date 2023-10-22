const express = require('express');
const router = express.Router();
const workoutsController = require('../controllers/workoutsController');

// Create a new workout
router.post('/', workoutsController.createWorkout);

// Get all workouts
router.get('/', workoutsController.getAllWorkouts);

module.exports = router;
