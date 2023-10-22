const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getDb } = require('../config/database')

// User registration
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const db = getDb()
    // Check if the user already exists
    const userExists = await db.collection("user_signup").findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      await db.collection("user_signup").insertOne({ name, email, hashedPassword })
    }

    const user = await db.collection("user_signup").findOne({ email });

    const key = process.env.MONGODB_SECRET_KEY;

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user._id }, key, { expiresIn: '1h' });

    res.status(201).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = getDb();

    // Find the user by email
    const user = await db.collection("user_signup").findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (isPasswordValid) {
      // Generate a JWT token for the user
      const key = process.env.MONGODB_SECRET_KEY;
      const token = jwt.sign({ userId: user._id }, key, { expiresIn: '1h' });
      res.status(200).json({ token, userId: user._id, name: user.name });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};