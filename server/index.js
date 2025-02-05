const express = require("express");
const App = express();
const port = 5000;
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/usersRoute");
const streakRoutes = require("./routes/streaksRoute");
const lessonRoutes = require("./routes/lessonsRoute");
const languageRoutes = require("./routes/languagesRoute");
const achievementRoutes = require("./routes/achievementsRoute");
const exercisesRoutes = require('./routes/exercisesroute');
const gemsRoutes = require('./routes/gemsRoute');
const levelsRoutes = require('./routes/levelsRoute');

// Middleware
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

// Mount routes
App.use("/api/users", userRoutes);
App.use("/api/streaks", streakRoutes);
App.use("/api/lessons", lessonRoutes);
App.use("/api/languages", languageRoutes);
App.use('/api/streaks', streakRoutes);
App.use('/api/exercises', exercisesRoutes);
App.use('/api/gems', gemsRoutes);
App.use('/api/levels', levelsRoutes);
App.use('/api/achievements', achievementRoutes);


App.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
