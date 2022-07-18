//everything to do with tasks
//CRUD a task

const taskController = require("../controllers/taskController.js");
const { Router } = require("express");

const router = Router();

// Get all tasks
router.get("/", taskController.getAllTasks);

//create a task
router.post("/", taskController.createTask);

// Get a task by id
router.get("/:id", taskController.getTaskById);

//update task
router.put("/:id", taskController.updateTask);

// Delete task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
