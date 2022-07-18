const db = require("../models");

const Customer = db.customer;

//creating main controller
const createCustomer = async (req, res) => {

let customerToBeCreated ={
  Name: req.body.Name,
    Location: req.body.Location,
    TeamLeaderId: req.body.TeamLeaderId,
    IsExternal: req.body.IsExternal,
}
const customer= await Customer.create(customerToBeCreated);
  res.json(customer);
};

//get all Customers
const getAllCustomers = async (req, res) => {
  let customer = await Customer.findAll({});
  res.json(customer);
};


//get Customer by id
const getCustomerById = async (req, res) => {
  let id = req.params.id;
  let customer = await Customer.findOne({ where: { id: id } });
  res.json(customer);
};

//update Customer
const updateCustomer = async (req, res) => {
 
  let id = req.params.id;
  let customerToBeUpdated = {
    Name: req.body.Name,
    Location: req.body.Location,
    TeamLeaderId: req.body.TeamLeaderId,
    IsExternal: req.body.IsExternal,
  };
  const customer = await Customer.update(customerToBeUpdated, { where: { id: id } });

  res.status(200).send(customer);

  res.json(customer);
};

//delete Customer
const deleteCustomer = async (req, res) => {

  let id = req.params.id;
  await Customer.destroy({ where: { id: id } });
  res.json({ message: "Customer deleted successfully" });
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
