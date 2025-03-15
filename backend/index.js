const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongoDb");
require("dotenv").config();
const connectCloudinary = require("./config/coludinaryConnect");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const openAiChatRouter = require("./routes/openAiChat.routes")

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
connectCloudinary();
const port = process.env.PORT;

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api", openAiChatRouter)

app.get("/", (req, res, next) => {
  res.json({success: true, message: "server is running"});
});

app.listen(port, console.log(`app is running on ${port}`));

module.exports = app;
