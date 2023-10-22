const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getDb} = require('../config/database')
const { ObjectId } = require('mongodb');

// Get user profile
exports.getUserProfile = async (req, res) => {
  const userId = req.params.userId;

  try {
    const db = getDb();
    const user = await db.collection("user_signup").findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};


// Update user information
exports.updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Implement validation and update logic here

    await User.findByIdAndUpdate(userId, updates);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'User update failed' });
  }
};

// usersController.js
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = getDb();
    const user = await db.collection("user_signup").findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};
