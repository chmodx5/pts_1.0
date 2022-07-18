const db = require("../models");

const Project = db.project;

//creating main controller
const createProject = async (req, res) => {
  let projectToBeCreated = {
    Name: req.body.Name,
    ExpectedStartDate: req.body.ExpectedStartDate,
    ExpectedEndDate: req.body.ExpectedEndDate,
    ActualStartDate: req.body.ActualStartDate,
    ActualEndDate: req.body.ActualEndDate,
    Completed: req.body.Completed,
    CustomerId: req.body.CustomerId,
    AdministratorId: req.body.AdministratorId,
  };
  const project = await Project.create(projectToBeCreated);

  res.json(project);
};

//get all products
const getAllProjects = async (req, res) => {
  let project = await Project.findAll({});
  res.json(project);
};

//get product by id
const getProjectById = async (req, res) => {
  let id = req.params.id;
  let project = await Project.findOne({ where: { id: id } });
  res.json(project);
};

//update project
const updateProject = async (req, res) => {
  let id = req.params.id;
  let projectToBeCreated = {
    Name: req.body.Name,
    ExpectedStartDate: req.body.ExpectedStartDate,
    ExpectedEndDate: req.body.ExpectedEndDate,
    ActualStartDate: req.body.ActualStartDate,
    ActualEndDate: req.body.ActualEndDate,
    Completed: req.body.Completed,
    CustomerId: req.body.CustomerId,
    AdministratorId: req.body.AdministratorId,
  };
  const project = await Project.update(projectToBeCreated, {
    where: { id: id },
  });

  res.json(project);
};

//delete project
const deleteProject = async (req, res) => {
  let id = req.params.id;
  await Team.destroy({ where: { id: id } });
  res.json({ message: "Team deleted successfully" });
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
