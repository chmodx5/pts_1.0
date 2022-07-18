const db = require("../models");

//creating main controller
const createProject = async (req, res) => {
  res.json({ message: "create project" });
};

//get all projects
const getAllProjects = async (req, res) => {
  res.json({ message: "All projects" });
};

//get project by id
const getProjectById = async (req, res) => {
  res.json({ message: "get project by id" });
};

//update project
const updateProject = async (req, res) => {
  res.json({ message: "update project" });
};

//delete project
const deleteProject = async (req, res) => {
  res.json({ message: "project deleted successfully" });
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
