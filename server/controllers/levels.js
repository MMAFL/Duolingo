const levels = require("../database/models/levels");


module.exports = {
  getLevels: async (req, res) => {
    const levels = await levels.findAll();
    res.status(200).json(levels);
    },
    createLevel: async (req, res) => {
      const { level_title, unclock_points_required, xp_reward } = req.body;
      const level = await levels.create({ level_title, unclock_points_required, xp_reward });
      res.status(201).json(level);
    },
    updateLevel: async (req, res) => {
      const { level_title, unclock_points_required, xp_reward } = req.body;
      const level = await levels.update({ level_title, unclock_points_required, xp_reward });
      res.status(200).json({ message: "Level with ID " + id + " updated successfully" });
    },

    deleteLevel: async (req, res) => {
      const { id } = req.params;
      const level = await levels.destroy({ where: { id } });
      res.status(200).json({ message: "Level with ID " + id + " deleted successfully" });
    },
};
