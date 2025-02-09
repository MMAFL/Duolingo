const express = require("express");
const {
  getUser,
  login,
  logout,
  register,
  resetPassword,
} = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUser", getUser);
// Password reset request
router.post("/reset-password", resetPassword);

module.exports = router;
