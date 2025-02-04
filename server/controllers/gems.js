const Gems = require("../database/models/gems");


module.exports = {
    getGems: async (req, res) => {
        const gems = await Gems.findAll();
        res.status(200).json(gems);
    },
    addGems: async (req, res) => {
        const { gem_balance } = req.body;
        const gem = await Gems.create({ gem_balance });
        res.status(201).json(gem);
    },
    updateGems: async (req, res) => {
        const { gem_balance } = req.body;
        const gem = await Gems.update({ gem_balance }, { where: { gem_id: req.params.gem_id } });
        res.status(200).json(gem);
    },
    deleteGems: async (req, res) => {
        const gem = await Gems.destroy({ where: { gem_id: req.params.gem_id } });
        res.status(200).json(gem);
    },
};

