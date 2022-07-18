const db = require("../models");

//creating main controller
const createPerson = async (req, res) => {
  res.json({ message: "create Person" });
};

//get all Persons
const getAllPersons = async (req, res) => {
  res.json({ message: "All Persons" });
};

//get Person by id
const getPersonById = async (req, res) => {
  res.json({ message: "get Person by id" });
};

//update Person
const updatePerson = async (req, res) => {
  res.json({ message: "update Person" });
};

//delete Person
const deletePerson = async (req, res) => {
  res.json({ message: "Person deleted successfully" });
};

module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
