const { v2: cloudinary } = require("cloudinary");
const productModel = require("../models/product.model");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    const img1 = req.files?.image1?.[0];
    const img2 = req.files?.image2?.[0];
    const img3 = req.files?.image3?.[0];

    const images = [img1, img2, img3].filter((item) => item);

  
    const imageUri = await Promise.all(
      images.map(async (item) => {
        const base64Image = item.buffer.toString("base64");
        const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`);
        return result.secure_url;
      })
    );

    const newProducts = new productModel({
      name: name,
      description: description,
      price: Number(price),
      category: category,
      subCategory: subCategory,
      sizes: JSON.parse(sizes),
      bestSeller: bestSeller,
      date: Date.now(),
      image: [...imageUri],
    });

    const product = await newProducts.save();
    res.json({ success: true, message: "Product successfully added", product });
  } catch (error) {
    console.log("🚀 ~ addProduct ~ error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const productList = async (req, res) => {
  try {
    const allProducts = await productModel.find({});
    res.json(allProducts);
  } catch (err) {
    console.log(err.message, "error");
  }
};

const singleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    res.json(product);
  } catch (err) {
    console.log(err.message);
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ status: 200, message: "product removed" });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { addProduct, productList, singleProduct, removeProduct };
