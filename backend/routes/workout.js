const express = require('express');
const router = express.Router();
const workoutsController = require('../controllers/workoutsController');

// Create a new workout
router.post('/generate-plan', workoutsController.generateWorkoutPlan);

// Get all workouts
router.get('/user-workouts/:userId', workoutsController.getUserWorkouts);

//update completion status of the workouts for each user 
router.post('/update-user-workouts', workoutsController.updateUserWorkouts);

module.exports = router;