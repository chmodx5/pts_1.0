const db = require("../models");


const Person = db.person;


//creating main controller
const createPerson = async (req, res) => {


  let personToBeCreated ={
    Name: req.body.Name,
      Location: req.body.Location,
      TeamLeaderId: req.body.TeamLeaderId,
      IsExternal: req.body.IsExternal,
  }
  const person= await Person.create(personToBeCreated);
    res.json(person);
};

//get all Persons
const getAllPersons = async (req, res) => {

  let person = await Person.findAll({});
  res.json(person);
};

//get Person by id
const getPersonById = async (req, res) => {

  let id = req.params.id;
  let person = await Person.findOne({ where: { id: id } });
  res.json(person);
};

//update Person
const updatePerson = async (req, res) => {

  let id = req.params.id;
  let personToBeUpdated = {
    Name: req.body.Name,
    Location: req.body.Location,
    TeamLeaderId: req.body.TeamLeaderId,
    IsExternal: req.body.IsExternal,
  };
  const person = await Person.update(personToBeUpdated, { where: { id: id } });

  res.status(200).send(person);

  res.json(person);
};

//delete Person
const deletePerson = async (req, res) => {

  let id = req.params.id;
  await Customer.destroy({ where: { id: id } });

  res.json({ message: "Person deleted successfully" });
};

module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
