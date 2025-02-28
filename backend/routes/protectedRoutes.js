const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const router = express.Router();

// Protected route for all logged-in users
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "User Profile", user: req.user });
});

// Admin-only route
router.delete("/delete-user/:id", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "User Deleted Successfully" });
});

module.exports = router;
