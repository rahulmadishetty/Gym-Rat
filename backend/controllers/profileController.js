const { getDb } = require('../config/database')



// User profile POST
exports.postProfileDetails = async (req, res) => {
    try {
        const { fName, dName, age, goal, bodyType, userId } = req.body;
        const db = getDb()
        const userExists = await db.collection("user_profile").findOne({ userId });
        
        if (userExists) {
            return res.status(400).json({ error: 'Details already exist' });

        } else {
            await db.collection("user_profile").insertOne({ fName, dName, age, goal, bodyType, userId, userId })
        }

        res.status(201).json("Details added successfully !!");
    } catch (error) {
        res.status(500).json({ error });
    }
};


// User Profile GET
exports.getProfileDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        const db = getDb();

        // Find the user by userId
        const userProfile = await db.collection("user_profile").findOne({ userId });

        if (!userProfile) {
            console.error(e);
            return res.status(401).json({ error: 'Failed to fetch the details' });
        }
        else {
            res.status(200).json({ userProfile });
        }
    } catch (error) {
        res.status(500).json({ error: 'Request Failed' });
    }
};