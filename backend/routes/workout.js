const express = require('express');
const router = express.Router();
const workoutsController = require('../controllers/workoutsController');

// Create a new workout
router.post('/generate-plan', workoutsController.generateWorkoutPlan);

// Get all workouts
//router.get('/', workoutsController.getAllWorkouts);

module.exports = router;
