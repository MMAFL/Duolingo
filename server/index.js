const express = require("express");
const App = express();
const port = 4000;
const cors = require("cors")
const db=require("./database/index.js")

App.use(cors())
App.use(express.json())
App.use(express.urlencoded({ extended: true }));


App.listen(port, () => {
    console.log(`app listening on http://127.0.0.1:${port}`);
  });