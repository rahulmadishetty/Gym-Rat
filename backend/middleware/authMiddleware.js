const jwt = require('jsonwebtoken');
const { param } = require('../routes/gymrat');

module.exports = (req, res, next) => {
  try {
    const secretKey = process.env.MONGODB_SECRET_KEY; 
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secretKey');
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};
