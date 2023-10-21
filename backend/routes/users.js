const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Get user profile
router.get('/:userId', usersController.getUserProfile);

// Update user information
router.put('/:userId', usersController.updateUser);

// Create a new user
router.post('/add', usersController.createUser);

module.exports = router;
