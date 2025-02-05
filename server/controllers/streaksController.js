// controllers/streakController.js
const db = require('../database');
const Streak = db.Streak;

exports.getAllStreaks = async (req, res) => {
  try {
    const streaks = await Streak.findAll();
    res.json(streaks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStreakById = async (req, res) => {
  try {
    const streak = await Streak.findByPk(req.params.id);
    if (streak) res.json(streak);
    else res.status(404).json({ error: 'Streak not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createStreak = async (req, res) => {
  try {
    const streak = await Streak.create(req.body);
    res.status(201).json(streak);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStreak = async (req, res) => {
  try {
    const streak = await Streak.findByPk(req.params.id);
    if (streak) {
      await streak.update(req.body);
      res.json(streak);
    } else res.status(404).json({ error: 'Streak not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStreak = async (req, res) => {
  try {
    const streak = await Streak.findByPk(req.params.id);
    if (streak) {
      await streak.destroy();
      res.json({ message: 'Streak deleted' });
    } else res.status(404).json({ error: 'Streak not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
