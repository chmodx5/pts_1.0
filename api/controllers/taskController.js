const db = require("../models");

const Task = db.task;

//creating main controller
const createTask = async (req, res) => {
  let taskToBeCreated = {
    Name: req.body.Name,
    ExpectedStartDate: req.body.ExpectedStartDate,
    ExpectedEndDate: req.body.ExpectedEndDate,
    ActualDateStarted: req.body.ActualDateStarted,
    ActualDateCompleted: req.body.ActualDateCompleted,
    ProjectId: req.body.ProjectId,
    TeamId: req.body.TeamId,
    StatusId: req.body.StatusId,
    PercentCompleted: req.body.PercentCompleted,
  };
  const task = await Task.create(taskToBeCreated);

  res.json(task);
};

//get all Tasks
const getAllTasks = async (req, res) => {
  let tasks = await Task.findAll({
    include: [
      //innclude the status
      { model: db.status },
      //include the project
      { model: db.project },

      //include the team
      { model: db.team },
    ],
  });
  res.json(tasks);
};

//get Task by id
const getTaskById = async (req, res) => {
  let id = req.params.id;
  let task = await Task.findOne({ where: { id: id } });
  res.json(task);
};

//update Task
const updateTask = async (req, res) => {
  let id = req.params.id;
  let taskToBeCreated = {
    Name: req.body.Name,
    ExpectedStartDate: req.body.ExpectedStartDate,
    ExpectedEndDate: req.body.ExpectedEndDate,
    ActualDateStarted: req.body.ActualDateStarted,
    ActualDateCompleted: req.body.ActualDateCompleted,
    ProjectId: req.body.ProjectId,
    TeamId: req.body.TeamId,
    StatusId: req.body.StatusId,
    PercentCompleted: req.body.PercentCompleted,
  };
  const task = await Task.update(taskToBeCreated, { where: { id: id } });

  res.json(task);
};

//delete Task
const deleteTask = async (req, res) => {
  let id = req.params.id;
  await Task.destroy({ where: { id: id } });
  res.json({ message: "task deleted successfully" });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
