const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;