const db = require('../database');
const User = db.models.User;
const { generateTokens } = require('../utils/authUtils');

exports.register = async (req, res) => {
  try {
    const { username, email, password_hash } = req.body;

    // Validate required fields
    if (!username || !email || !password_hash) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create the user
    const user = await User.create({ username, email, password_hash });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Validation error details:', error.errors); // Log detailed error
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password_hash } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isValidPassword = await user.comparePassword(password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const { accessToken, refreshToken } = generateTokens(user);
    console.log('Generated Tokens:', { accessToken, refreshToken }); // Log tokens

    await user.update({ refresh_token: refreshToken });
    console.log('Refresh Token Stored in Database:', refreshToken); // Log stored token

    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ accessToken });
  } catch (error) {
    console.error('Login Error:', error); // Log errors
    res.status(500).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findByPk(userId);
    await user.update({ refresh_token: null });

    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
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