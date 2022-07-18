//takes care of aything to do with the project
//CRUD a project
const projectController = require("../controllers/projectController.js");
const { Router } = require("express");

const router = Router();

// Get all projects
router.get("/", projectController.getAllProjects);

//create a project
router.post("/", projectController.createProject);

// Get a project by id
router.get("/:id", projectController.getProjectById);

//update project
router.put("/:id", projectController.updateProject);

// Delete project
router.delete("/:id", projectController.deleteProject);

module.exports = router;
