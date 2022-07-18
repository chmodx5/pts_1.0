const db = require("../models");

//creating main controller
const createTask = async (req, res) => {
  res.json({ message: "create Task" });
};

//get all Tasks
const getAllTasks = async (req, res) => {
  res.json({ message: "All Tasks" });
};

//get Task by id
const getTaskById = async (req, res) => {
  res.json({ message: "get Task by id" });
};

//update Task
const updateTask = async (req, res) => {
  res.json({ message: "update Task" });
};

//delete Task
const deleteTask = async (req, res) => {
  res.json({ message: "Task deleted successfully" });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
