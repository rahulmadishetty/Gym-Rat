const Workout = require('../models/workout');

// Create a new workout
exports.createWorkout = async (req, res) => {
  const { name, exercises } = req.body;

  try {
    if (!name || !exercises || exercises.length === 0) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const workout = new Workout({ name, exercises });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Workout creation failed' });
  }
};

// Get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
};
