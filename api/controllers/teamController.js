const db = require("../models");

const Team = db.team;

//creating main controller
const createTeam = async (req, res) => {
  let teamToBeCreated = {
    Name: req.body.Name,
    Location: req.body.Location,
    TeamLeaderId: req.body.TeamLeaderId,
    IsExternal: req.body.IsExternal,
  };
  const team = await Team.create(teamToBeCreated);

  res.json(team);
};

//get all Teams
const getAllTeams = async (req, res) => {
  let teams = await Team.findAll({});
  res.json(teams);
};

//get Team by id
const getTeamById = async (req, res) => {
  let id = req.params.id;
  let team = await Team.findOne({ where: { id: id } });
  res.json(team);
};

//update Team
const updateTeam = async (req, res) => {
  let id = req.params.id;
  let teamToBeUpdated = {
    Name: req.body.Name,
    Location: req.body.Location,
    TeamLeaderId: req.body.TeamLeaderId,
    IsExternal: req.body.IsExternal,
  };
  const team = await Team.update(teamToBeUpdated, { where: { id: id } });

  res.status(200).send(product);
  res.json(team);
};

//delete Team
const deleteTeam = async (req, res) => {
  let id = req.params.id;
  await Team.destroy({ where: { id: id } });
  res.json({ message: "Team deleted successfully" });
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
};
