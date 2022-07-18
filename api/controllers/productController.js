const db = require("../models");

//creating main model

const Product = db.products;
const Category = db.category;

//creating main controller
const addProduct = async (req, res) => {
  let productData = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    categoryId: req.body.categoryId,
  };
  const product = await product
    .create(productData)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

//get all products
const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

//get product by id
const getProductById = async (req, res) => {
  let productId = req.params.id;
  const product = await Product.findOne({
    where: {
      id: productId,
    },
  });
  res.json(product);
};

//update product
const updateProduct = async (req, res) => {
  let productId = req.params.id;
  let productData = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    categoryId: req.body.categoryId,
  };
  const product = await Product.update(productData, {
    where: {
      id: productId,
    },
  });
  res.json(product);
};

//delete product
const deleteProduct = async (req, res) => {
  let productId = req.params.id;
  await Product.destroy({
    where: {
      id: productId,
    },
  });
  res.json({ message: "Product deleted successfully" });
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
