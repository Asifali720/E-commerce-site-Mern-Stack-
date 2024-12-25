const userModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_KEY);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email });
    const user = JSON.parse(JSON.stringify(findUser));
    if (!user) {
      res.json({ success: false, message: "user doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token: token, message: "login successfully" });
    } else {
      res.json({ success: false, message: "incorrect password" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await userModel.findOne({ email });
    if (exist) {
      res.json({ success: false, message: "user already exist" });
    }
    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "Please enter valid email" });
    }
    if (password.length < 8) {
      res.json({ success: false, message: "Please enter strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const userSave = await newUser.save();
    const user = JSON.parse(JSON.stringify(userSave));
    const token = createToken(user._id);
    res.json({ success: true, token, message: "user has been created" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: error.message });
  }
};

const adminLogin = async (req, res) => {};

module.exports = { loginUser, registerUser, adminLogin };
