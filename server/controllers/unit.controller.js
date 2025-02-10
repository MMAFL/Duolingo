const db = require("../models/index.js");
const Unit = db.Unit;

exports.createUnit = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      throw new Error("All fields are required");
    }

    const unit = await Unit.create({ title, description });

    return res.status(201).json(unit);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getUnits = async (req, res) => {
  try {
    const units = await Unit.findAll();

    return res.status(200).json(units);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
