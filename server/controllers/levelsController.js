const db = require("../database");
const Level = db.Level;

module.exports = {
  getLevels: async (req, res) => {
    try {
      const levels = await Level.findAll();
      res.status(200).json(levels);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createLevel: async (req, res) => {
    try {
      const { level_name, level_description, level_points_required } = req.body;
      const level = await Level.create({
        level_name,
        level_description,
        level_points_required,
      });

      res.status(201).json(level);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateLevel: async (req, res) => {
    try {
      const { level_title, unclock_points_required, xp_reward } = req.body;
      const level = await Level.update({
        level_title,
        unclock_points_required,
        xp_reward,
      }, { where: { level_id: req.params.level_id } });

      res.status(200).json(level);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteLevel: async (req, res) => {
    try {
      const level = await Level.destroy({ where: { level_id: req.params.level_id } });
      res.status(200).json(level);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
