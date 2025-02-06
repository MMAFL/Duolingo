const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database");
const User = db.User;
const { generateTokens } = require('../utils/authUtils');

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate password
  if (!validatePassword(password)) {
    return res.status(400).json({ 
      error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    });
  }

  try {
    // Check database connection
    if (!db.sequelize) {
      throw new Error('Database connection not established');
    }

    // Check User model
    if (!User || typeof User.findOne !== 'function') {
      throw new Error('User model not properly initialized');
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create the user (password is hashed automatically by model hook)
    const user = await User.create({
      username,
      email,
      password_hash: password, // Will be hashed by the model's beforeCreate hook
      xp_points: 0,
      unlock_points: 0,
      hearts: 5,
      gems: 0,
      streak_days: 0
    });

    // Generate JWT tokens
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ 
      token,
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        xp_points: user.xp_points,
        hearts: user.hearts,
        gems: user.gems,
        streak_days: user.streak_days
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate password
  if (!validatePassword(password)) {
    return res.status(400).json({ 
      error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    });
  }

  try {
    // Find the user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords using the model's method
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ 
      token,
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        xp_points: user.xp_points,
        hearts: user.hearts,
        gems: user.gems,
        streak_days: user.streak_days
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    // Since we're using JWT, logout is handled client-side by removing the token
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: 'No refresh token provided' });
    }

    const user = await User.findOne({ where: { refresh_token: refreshToken } });
    if (!user) {
      return res.status(404).json({ error: 'Invalid refresh token' });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);
    await user.update({ refresh_token: newRefreshToken });

    res.cookie('refreshToken', newRefreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };