const { verifyToken } = require('../utils/authUtils');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = authenticate; 