const express = require("express");
const { createUnit, getUnits } = require("../controllers/unit.controller.js");

const router = express.Router();

router.post("/", createUnit);
router.get("/", getUnits);

module.exports = router;
