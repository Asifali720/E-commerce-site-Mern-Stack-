const jwt = require("jsonwebtoken");

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        status: false,
        message: "Login required please login first",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        status: false,
        message: "invalid credientials Login required please login first",
      });
    }
    next();
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = adminAuth;
