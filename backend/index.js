const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongoDb");
require("dotenv").config();
const connectCloudinary = require("./config/coludinaryConnect");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();
const port = process.env.PORT;

app.use("/api/user", userRouter);

app.get("/", (req, res, next) => {
  res.send("Hi kese ho");
});

app.listen(port, console.log(`app is running on ${port}`));
