const db = require("../database");
const Gems = db.Gems;

module.exports = {
  getGems: async (req, res) => {
    try {
      const gems = await Gems.findAll();
      res.status(200).json(gems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addGems: async (req, res) => {
    try {
      const { gem_balance } = req.body;
      const gem = await Gems.create({ gem_balance });
      res.status(201).json(gem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateGems: async (req, res) => {
    try {
      const { gem_balance } = req.body;
      const gem = await Gems.update(
        { gem_balance },
        { where: { gem_id: req.params.gem_id } }
      );
      res.status(200).json(gem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteGems: async (req, res) => {
    try {
      const gem = await Gems.destroy({
        where: { gem_id: req.params.gem_id }
      });
      res.status(200).json(gem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
