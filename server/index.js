const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes.js");
const unitRoutes = require("./routes/unit.route.js");
const lessonRoutes = require("./routes/lesson.routes.js");
const questionRoutes = require("./routes/question.route.js");
const userProgressRoutes = require("./routes/userProgress.route.js");
const verifyToken = require("./middlewares/verifyToken.js");
const db = require("./models/index.js");

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes); // without verify token
app.use("/api/unit", unitRoutes);
app.use("/api/lesson", lessonRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/user-progress", userProgressRoutes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
