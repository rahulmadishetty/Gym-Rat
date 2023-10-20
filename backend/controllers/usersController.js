const User = require('../models/user');

// Get user profile
exports.getUserProfile = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
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
