require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const dbUrl = process.env.DATABASE_URL

// mongoose.connect(process.env.DATABASE_URL)

async function connect() {
    try {
        await mongoose.connect(dbUrl)
        console.log('Connected to Database')
        
    } catch (error) {
        console.error(error);
        
    }
}
connect();
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

app.use(express.json())


const authRoutes = require('./routes/auth');
const workoutsRoutes = require('./routes/workouts');
const usersRoutes = require('./routes/users');


const gymRatRouter = require('./routes/gymrat')
app.use('/gymrat', gymRatRouter)


app.listen(3007, () => console.log('Server Started on port 3007'))