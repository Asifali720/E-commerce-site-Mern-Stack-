const { v2: cloudinary } = require("cloudinary");

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
      date,
    } = req.body;

    const img1 = req.files.image1[0] && req.files.image1[0];
    const img2 = req.files.image2[0] && req.files.image2[0];
    const img3 = req.files.image3[0] && req.files.image3[0];

    const images = [img1, img2, img3].filter((item) => item != undefined);

    const imageUri = await Promise.all(
      images.map(async (item) => {
        console.log("🚀 ~ images.map ~ item:", item);
        const result = await cloudinary.uploader.upload(item.path);
        return result.secure_url;
      })
    );
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
      date,
      imageUri,
      "data product"
    );
    // console.log(imageUri);
  } catch (error) {
    console.log("🚀 ~ addProduct ~ error:", error);
    res.json({ success: false, message: error.message });
  }
};

const productList = async (req, res) => {};

const singleProduct = async (req, res) => {};

const removeProduct = async (req, res) => {};

module.exports = { addProduct, productList, singleProduct, removeProduct };
