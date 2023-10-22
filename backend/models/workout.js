const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  exercises: [
    {
      name: String,
      duration: Number,
    },
  ],
  // Add more fields as needed
});

module.exports = mongoose.model('Workout', workoutSchema);
