const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getDb} = require('../config/database')


// User registration
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const db = getDb()
    console.log(db, 'hit')
    await db.collection("user_signup").insertOne({name, email, password})

    // Check if the user already exists
    // const userExists = await User.findOne({ email });
    // if (userExists) {
    //   return res.status(400).json({ error: 'User already exists' });
    // }
    
  
    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Point 18");

    

    const key = process.env.MONGODB_SECRET_KEY;
    // Generate a JWT token for the user
    // const token = jwt.sign({ userId: user._id }, 'key', { expiresIn: '1h' });
    // console.log("after jwt line 31");

    // const newUser = await User.findOne({ email });

    res.status(201).json({ msg: "Added new user" });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // Generate a JWT token for the user
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
      res.status(200).json({ token, userId: user._id });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};