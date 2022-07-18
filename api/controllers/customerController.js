const db = require("../models");

//creating main controller
const createCustomer = async (req, res) => {
  res.json({ message: "create Customer" });
};

//get all Customers
const getAllCustomers = async (req, res) => {
  res.json({ message: "All Customers" });
};

//get Customer by id
const getCustomerById = async (req, res) => {
  res.json({ message: "get Customer by id" });
};

//update Customer
const updateCustomer = async (req, res) => {
  res.json({ message: "update Customer" });
};

//delete Customer
const deleteCustomer = async (req, res) => {
  res.json({ message: "Customer deleted successfully" });
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
