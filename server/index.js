const express = require("express");
const App = express();
const port = 4000;
const cors = require("cors")
const db = require("./database/index.js")

const exercisesRoutes = require('./routes/exercises');
const gemsRoutes = require('./routes/gems');
const levelsRoutes = require('./routes/levels');

App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }));

App.use('/exercises', exercisesRoutes);

App.use('/gems', gemsRoutes);
App.use('/levels', levelsRoutes);


App.listen(port, () => {
    console.log(`app listening on http://127.0.0.1:${port}`);
  });