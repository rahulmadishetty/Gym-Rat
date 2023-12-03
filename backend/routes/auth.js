const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// User registration
router.post('/signup', authController.signup);

// User login
router.post('/login', authMiddleware, authController.login);

module.exports = router;
