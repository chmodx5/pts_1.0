const db = require("../models");

//creating main controller
const createTeam = async (req, res) => {
  res.json({ message: "create Team" });
};

//get all Teams
const getAllTeams = async (req, res) => {
  res.json({ message: "All Teams" });
};

//get Team by id
const getTeamById = async (req, res) => {
  res.json({ message: "get Team by id" });
};

//update Team
const updateTeam = async (req, res) => {
  res.json({ message: "update Team" });
};

//delete Team
const deleteTeam = async (req, res) => {
  res.json({ message: "Team deleted successfully" });
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
};
