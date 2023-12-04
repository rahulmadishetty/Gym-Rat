const Workout = require('../models/workout');
const { getDb } = require('../config/database')
const { ObjectId } = require('mongodb');
const { json } = require('body-parser');


// Generate a 5-day workout plan
exports.generateWorkoutPlan = async (req, res) => {
  try {
    const { userId } = req.body;
    const id = '656c2996fd1b1227cf935ca0';
    const db = getDb();
    const getUserProfile = await db.collection("user_profile").findOne({ userId: userId });
    const getExistingWorkoutPlan = await db.collection("user_workouts").findOne({ userId: userId });

    if (!getExistingWorkoutPlan) {
      const workoutDocument = await db.collection("workouts").findOne({ _id: new ObjectId(id) });
      const reqObj ={
      goal : getUserProfile.goal,
      age : getUserProfile.age,
      bodyType : getUserProfile.bodyType
     }
      if (!workoutDocument || !Array.isArray(workoutDocument.exercises)) {
        return res.status(404).json({ error: 'Workout plan not found or has an invalid structure' });
      }
    
    const allExercises = workoutDocument.exercises;
  
  
      let fiveDayPlan = [];
    const muscleGroups = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms'];

    muscleGroups.forEach((group, index) => {
      const exercisesForGroup = allExercises.filter(exercise => exercise.target === group);
      let numExercises = determineExerciseCount(reqObj.goal, reqObj.age, reqObj.bodyType);
    
      // Initialize the day plan with an empty workouts array
      fiveDayPlan.push({
        day: `Day ${index + 1}`,
        muscleGroup: group,
        workouts: []
      });
    
      for (let i = 0; i < numExercises; i++) {
        if (exercisesForGroup.length > i) {
          const selectedExercise = exercisesForGroup[i];
          // Correctly access the workouts array of the specific day's plan
          console.log(selectedExercise);
          fiveDayPlan[index].workouts.push({
            title: selectedExercise.title,
            reps: selectedExercise.reps,
            image: selectedExercise.image,
            duration: selectedExercise.duration,
            completed: false,
            target: selectedExercise.target,
            video: selectedExercise.video,
            exerciseId: selectedExercise.exerciseId
          });
        }
      }
    });
      await db.collection("user_workouts").insertOne({ userId, fiveDayPlan })
  
      const generatedWorkouts = await db.collection("user_workouts").findOne({ userId: userId });
      res.status(200).json(generatedWorkouts);
    } else {
      res.status(200).json(getExistingWorkoutPlan);
    }


  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate workout plan' });
  }
};



function determineExerciseCount(goal, age, bodyType) {
  // Convert age to an age group
  let ageGroup = age;
  console.log(ageGroup);
 // Base number of exercises on the goal
 let baseExercises = goal === 'Lose Weight' ? 1 : goal === 'Gain Muscle' ? 2 : 3;

 // Modify based on age group and body type
 switch (ageGroup) {
   case 'below30':
     // Younger individuals may have more capacity for intense workouts
     baseExercises += bodyType === 'Ectomorph' ? 1 : bodyType === 'Mesomorph' ? 2 : 0;
     break;
   case 'below40':
     // Still in a good age range for physical activity, adjust based on body type
     baseExercises += bodyType === 'Mesomorph' ? 1 : bodyType === 'Endomorph' ? -1 : 0;
     break;
   case 'below50':
     // Consider reducing intensity for endomorphs, maintain for others
     baseExercises += bodyType === 'Endomorph' ? -1 : 0;
     break;
   case '50+':
     // Reduce intensity for older age group
     baseExercises = Math.max(1, baseExercises - 1);
     break;
 }

 return baseExercises;
}


// Get all workouts as per specific user
exports.getUserWorkouts = async (req, res) => {
  try {
    const { userId } = req.params;
    const db = getDb()
    // Check if the user already exists
    console.log(userId);
    const userExists = await db.collection("user_workouts").findOne({ userId: userId });

    if (!userExists) {
      return res.status(400).json({ error: 'User Does not exist' });
    } else {
      res.status(200).json({ userExists });
  }
  } catch (error) {
    res.status(500).json({ error });
  }
};

//update completion status of the workouts for each user 
exports.updateUserWorkouts = async (req, res) => {
  try {
      const { userId, exerciseId, day, completionflag } = req.body;
      const db = getDb()
      const userExists = await db.collection("user_workouts").findOne({ userId });
      
      if (!userExists) {
          return res.status(400).json({ error: 'Details not exist' });
      }

    const dayIndex = userExists.fiveDayPlan.findIndex(dayPlan => dayPlan.exercise.exerciseId == exerciseId);
    if (dayIndex === -1) {
      return res.status(400).json({ error: 'Day not found in user plan' });
    }

   
    // Construct the field update string based on the day index
    const updateField = `fiveDayPlan.${dayIndex}.exercise.completed`;

    // Now, update the completed status of the exercise for that day
    const updateResult = await db.collection("user_workouts").updateOne(
      { userId, [`fiveDayPlan.${dayIndex}.exercise.exerciseId`]: exerciseId },
      { $set: { [updateField]: completionflag } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(400).json({ error: 'Exercise not found for the user on the specified day' });
    }

    res.status(200).json("Exercise completion status updated successfully!");
  } catch (error) {
    console.error('Error updating exercise completion status:', error);
    res.status(500).json({ error: 'An error occurred while updating the exercise status' });
  }
};