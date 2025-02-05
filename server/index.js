const express = require("express");
const App = express();
const port = 4000;
const cors = require("cors");

// Import routes
const userRoutes = require('./routes/UsersRoute');
const streakRoutes = require('./routes/StreakRoute');
const authRoutes = require('./routes/AuthRoute');
App.use(cors()); // Update with your frontend URL
App.use(express.json());
App.use(express.urlencoded({ extended: true }));


// Health check endpoint
App.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Mount routes
App.use('/api/auth', authRoutes);
App.use('/api/users', userRoutes);
App.use('/api/streaks', streakRoutes);


// Error handling middleware
App.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

App.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
