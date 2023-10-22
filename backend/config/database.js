const { MongoClient } = require('mongodb');

let dbConnection;
const dbUrl = process.env.DATABASE_URL

module.exports = {
  connectToDb: (dbUrl, cb) => {
    MongoClient.connect(dbUrl)
      .then((client) => {
        dbConnection = client.db("gym_rat"); // Set up the database connection
        console.log('Connected to MongoDB..');
        return cb(null);
      })
      .catch((e) => {
        console.error(e, 'Error connecting to the database');
        return cb(e);
      });
  },
  getDb: () => dbConnection,
};