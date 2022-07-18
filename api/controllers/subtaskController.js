const db = require("../models");

const Subtask = db.subtask;

//creating main controller
const createSubtask = async (req, res) => {
  let subtaskToBeCreated = {
    Name: req.body.Name,
    StatusId: req.body.StatusId,
    PercentCompleted: req.body.PercentCompleted,
    TaskId: req.body.TaskId,
    TeamMemberId: req.body.TeamMemberId,
  };
  const subtask = await Subtask.create(subtaskToBeCreated);

  res.json(subtask);
};

//get all Subtasks
const getAllSubtasks = async (req, res) => {
  res.json({ message: "All Subtasks" });
};

//get Subtask by id
const getSubtaskById = async (req, res) => {
  let id = req.params.id;
  let subtask = await Subtask.findOne({ where: { id: id } });
  res.json(subtask);
};

//update Subtask
const updateSubtask = async (req, res) => {
  let id = req.params.id;
  let subtaskToBeCreated = {
    Name: req.body.Name,
    StatusId: req.body.StatusId,
    PercentCompleted: req.body.PercentCompleted,
    TaskId: req.body.TaskId,
    TeamMemberId: req.body.TeamMemberId,
  };

  const subtask = await Task.update(subtaskToBeCreated, { where: { id: id } });

  res.json(subtask);
};

//delete Subtask
const deleteSubtask = async (req, res) => {
  let id = req.params.id;
  await Team.destroy({ where: { id: id } });
  res.json({ message: "Subtask deleted successfully" });
};

module.exports = {
  createSubtask,
  getAllSubtasks,
  getSubtaskById,
  updateSubtask,
  deleteSubtask,
};
