//takes care of aything to do with the subtask
//CRUD a subtask
const subtaskController = require("../controllers/subtaskController.js");
const { Router } = require("express");

const router = Router();

// Get all subtasks
router.get("/", subtaskController.getAllSubtasks);

//create a subtask
router.post("/", subtaskController.createSubtask);

// Get a subtask by id
router.get("/:id", subtaskController.getSubtaskById);

//update subtask
router.put("/:id", subtaskController.updateSubtask);

// Delete subtask
router.delete("/:id", subtaskController.deleteSubtask);

module.exports = router;
