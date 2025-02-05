const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

// Import routes
const userRoute = require("./routes/usersRoute");
const streakRoute = require("./routes/streaksRoute");
const lessonRoute = require("./routes/lessonsRoute");
const languageRoute = require("./routes/languagesRoute");
const achievementRoute = require("./routes/achievementsRoute");
const exercisesRoute = require('./routes/exercisesRoute');
const gemsRoute = require('./routes/gemsRoute');
const levelsRoute = require('./routes/levelsRoute');
const authsRoute = require("./routes/authsRoute")

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/api/auth",authsRoute)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
