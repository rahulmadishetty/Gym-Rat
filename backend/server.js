require('dotenv').config();
const express = require('express');
const authMiddleware = require('./middleware/authMiddleware');
const { connectToDb } = require('./config/database'); // Import the connectToDb function

const authRoutes = require('./routes/auth');
const workoutsRoutes = require('./routes/workout');
const usersRoutes = require('./routes/users');
const gymRatRouter = require('./routes/gymrat');

const app = express();
const dbUrl = process.env.DATABASE_URL;

app.use(express.json());

// Connect to the database and start the server only when the connection is established.
connectToDb(dbUrl, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    // Set up routes and start the server
    app.use('/auth', authRoutes);
    app.use('/workouts', workoutsRoutes);
    app.use('/users', usersRoutes);
    app.use('/gymrat', gymRatRouter);

    // Protected route (example)
    app.get('/protected', authMiddleware, (req, res) => {
      res.status(200).json({ message: 'This is a protected route' });
    });

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }
});
