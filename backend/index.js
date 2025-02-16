const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongoDb");
require("dotenv").config();
const connectCloudinary = require("./config/coludinaryConnect");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const functions = require('firebase-functions');

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();
const port = process.env.PORT;

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res, next) => {
  res.send("Hi");
});

app.listen(port, console.log(`app is running on ${port}`));
exports.app = functions.https.onRequest(app);
