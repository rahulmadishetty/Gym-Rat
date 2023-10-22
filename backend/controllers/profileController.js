const { getDb } = require('../config/database')


// User profile POST
exports.postProfileDetails = async (req, res) => {
    try {
        const { height, age, weight, level, focus, userId } = req.body;
        const db = getDb()
        const userExists = await db.collection("user_profile").findOne({ userId });
        
        if (userExists) {
            return res.status(400).json({ error: 'Details already exist' });

        } else {
            await db.collection("user_profile").insertOne({ height, age, weight, level, focus, userId })
        }

        res.status(201).json("Details added successfully !!");
    } catch (error) {
        res.status(500).json({ error });
    }
};


// User Profile GET
exports.getProfileDetails = async (req, res) => {
    try {
        const { userId_req } = req.params.userId;

        const db = getDb();

        // Find the user by userId
        const userProfile = await db.collection("user_profile").findOne({ userId_req });

        if (!userProfile) {
            return res.status(401).json({ error: 'Failed to fetch the details' });
        }
        else {
            res.status(200).json({ userProfile });
        }
    } catch (error) {
        res.status(500).json({ error: 'Request Failed' });
    }
};