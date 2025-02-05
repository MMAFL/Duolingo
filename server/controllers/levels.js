const db = require("../database");
const Levels = db.models.Levels;


module.exports = {
  getLevels: async (req, res) => {
    try {
      const levels = await Levels.findAll();
      res.status(200).json(levels);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  },

  createLevel: async (req, res) => {
    try {
      const { level_title, unclock_points_required, xp_reward } = req.body;
      const level = await Levels.create({
        level_title,
        unclock_points_required,
        xp_reward,
      });

      res.status(201).json(level);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateLevel: async (req, res) => {
    try {
      const { level_title, unclock_points_required, xp_reward } = req.body;
      const level = await Levels.update({
        level_title,
        unclock_points_required,
        xp_reward,
      });

      res
        .status(200)
        .json({ message: "Level with ID " + id + " updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteLevel: async (req, res) => {
    try {
      const { id } = req.params;
      const level = await Levels.destroy({ where: { id } });
      res
        .status(200)
        .json({ message: "Level with ID " + id + " deleted successfully" });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
