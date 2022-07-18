//takes care of aything to do with the customer
//CRUD a customer
const customerController = require("../controllers/customerController.js");
const { Router } = require("express");

const router = Router();

// Get all customers
router.get("/", customerController.getAllCustomers);

//create a customer
router.post("/", customerController.createCustomer);

// Get a customer by id
router.get("/:id", customerController.getCustomerById);

//update customer
router.put("/:id", customerController.updateCustomer);

// Delete customer
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
