const productController = require("../controllers/productController.js");
const { Router } = require("express");

const router = Router();

// Get all products
router.get("/", productController.getAllProducts);

//add product
router.post("/", productController.addProduct);

// Get product by id
router.get("/:id", productController.getProductById);

//update product
router.put("/:id", productController.updateProduct);

// Delete product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
