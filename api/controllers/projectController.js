const db = require("../models");

//creating main model

const Product = db.products;
const Category = db.category;

//creating main controller
const createProject = async (req, res) => {
  //   let productData = {
  //     name: req.body.name,
  //     price: req.body.price,
  //     description: req.body.description,
  //     image: req.body.image,
  //     categoryId: req.body.categoryId,
  //   };
  //   const product = await product
  //     .create(productData)
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  res.json({ message: "create project" });
};

//get all products
const getAllProjects = async (req, res) => {
  //   const products = await Product.findAll();
  res.json({ message: "All products" });
};

//get product by id
const getProjectById = async (req, res) => {
  //   let productId = req.params.id;
  //   const product = await Product.findOne({
  //     where: {
  //       id: productId,
  //     },
  //   });
  //   res.json(product);
  res.json({ message: "get project by id" });
};

//update project
const updateProject = async (req, res) => {
  //   let productId = req.params.id;
  //   let productData = {
  //     name: req.body.name,
  //     price: req.body.price,
  //     description: req.body.description,
  //     image: req.body.image,
  //     categoryId: req.body.categoryId,
  //   };
  //   const product = await Product.update(productData, {
  //     where: {
  //       id: productId,
  //     },
  //   });
  //   res.json(product);
  res.json({ message: "update project" });
};

//delete project
const deleteProject = async (req, res) => {
  //   let productId = req.params.id;
  //   await Product.destroy({
  //     where: {
  //       id: productId,
  //     },
  //   });
  res.json({ message: "Product deleted successfully" });
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
