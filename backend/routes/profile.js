const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Get user profile
router.get('/:userId', profileController.getProfileDetails);

// Post user information (Ensure this route has a callback function)
router.post('/create', profileController.postProfileDetails);

module.exports = router;
