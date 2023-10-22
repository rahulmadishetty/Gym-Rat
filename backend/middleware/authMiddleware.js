// authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const key = process.env.MONGODB_SECRET_KEY;
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, key); 
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};
