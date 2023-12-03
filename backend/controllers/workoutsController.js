const Workout = require('../models/workout');
const { getDb } = require('../config/database')
const { ObjectId } = require('mongodb');
const { json } = require('body-parser');

// Generate a 5-day workout plan
exports.generateWorkoutPlan = async (req, res) => {
  try {
    const { userId, goal, age, bodyType } = req.body;
    const id = '656c2996fd1b1227cf935ca0';
    const db = getDb();
    // Fetch the workout document
    const workoutDocument = await db.collection("workouts").findOne({ _id: new ObjectId(id) });
   //console.log(req.body);

    // Log the fetched workout document and its workouts
  //  console.log('Workout Document:', workoutDocument);

    if (!workoutDocument || !Array.isArray(workoutDocument.exercises)) {
      return res.status(404).json({ error: 'Workout plan not found or has an invalid structure' });
    }

    const allExercises = workoutDocument.exercises;


    let fiveDayPlan = [];
    const muscleGroups = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms'];

    muscleGroups.forEach((group, index) => {
      const exercisesForGroup = allExercises.filter(exercise => exercise.target === group);
      let numExercises = determineExerciseCount(goal, age, bodyType);

      for (let i = 0; i < numExercises; i++) {
        if (exercisesForGroup.length > i) {
          const selectedExercise = exercisesForGroup[i];
          fiveDayPlan.push({
            day: `Day ${index + 1}`,
            muscleGroup: group,
            exercise: selectedExercise
          });
        }
      }
    });

    res.status(200).json(fiveDayPlan);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate workout plan' });
  }
};



function determineExerciseCount(goal, age, bodyType) {
  // Convert age to an age group
  let ageGroup;
  if (age >= 18 && age <= 20) {
    ageGroup = '18-20';
  } else if (age <= 30) {
    ageGroup = '21-30';
  } else if (age <= 45) {
    ageGroup = '31-45';
  } else {
    ageGroup = '46-70';
  }

  // Base number of exercises on the goal
  let baseExercises = goal === 'Lose Weight' ? 1 : goal === 'Gain Muscle' ? 2 : 3;

  // Modify based on age group and body type
  switch (ageGroup) {
    case '18-20':
      baseExercises += bodyType === 'Ectomorph' ? 1 : 0;
      break;
    case '21-30':
      // In the prime age for physical activity, we can add more intensity
      baseExercises += bodyType === 'Mesomorph' ? 1 : 0;
      break;
    case '31-45':
      // Consider a moderate increase for Mesomorphs
      baseExercises += bodyType === 'Mesomorph' ? 1 : 0;
      break;
    case '46-70':
      // Reduce intensity for older age group
      baseExercises = Math.max(1, baseExercises - 1);
      break;
  }

  return baseExercises;
}


// Get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
};
