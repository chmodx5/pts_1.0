const db = require("../models");

//creating main controller
const createSubtask = async (req, res) => {
  res.json({ message: "create Subtask" });
};

//get all Subtasks
const getAllSubtasks = async (req, res) => {
  res.json({ message: "All Subtasks" });
};

//get Subtask by id
const getSubtaskById = async (req, res) => {
  res.json({ message: "get Subtask by id" });
};

//update Subtask
const updateSubtask = async (req, res) => {
  res.json({ message: "update Subtask" });
};

//delete Subtask
const deleteSubtask = async (req, res) => {
  res.json({ message: "Subtask deleted successfully" });
};

module.exports = {
  createSubtask,
  getAllSubtasks,
  getSubtaskById,
  updateSubtask,
  deleteSubtask,
};
