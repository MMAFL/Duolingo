require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const db = require('./database');

// Import routes
const userRoute = require("./routes/usersRoute");
const streakRoute = require("./routes/streaksRoute");
const lessonRoute = require("./routes/lessonsRoute");
const languageRoute = require("./routes/languagesRoute");
const achievementRoute = require("./routes/achievementsRoute");
const exercisesRoute = require('./routes/exercisesRoute');
const gemsRoute = require('./routes/gemsRoute');
const levelsRoute = require('./routes/levelsRoute');
const authRoute = require("./routes/authsRoute");

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Import routes
const userRoutes = require("./routes/usersRoute");
const authRoutes = require("./routes/authsRoute");

// Mount routes
app.use("/api/users", userRoute);
app.use("/api/streaks", streakRoute);
app.use("/api/lessons", lessonRoute);
app.use("/api/languages", languageRoute);
app.use('/api/streaks', streakRoute);
app.use('/api/exercises', exercisesRoute);
app.use('/api/gems', gemsRoute);
app.use('/api/levels', levelsRoute);
app.use('/api/achievements', achievementRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// After initializing your database
db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
    // Start your server here
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
