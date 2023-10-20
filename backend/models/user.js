const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  }
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
