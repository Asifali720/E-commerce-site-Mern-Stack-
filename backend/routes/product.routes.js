const express = require("express");
const {
  addProduct,
  productList,
  removeProduct,
  singleProduct,
} = require("../controllers/product.controller");
const adminAuth = require("../middlewares/adminAuth");
const upload = require("../middlewares/multer");

const productRouter = express.Router();
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  addProduct
);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", productList);

module.exports = productRouter;
