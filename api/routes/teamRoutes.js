//takes care of aything to do with the team
//CRUD a team
const teamController = require("../controllers/teamController.js");
const { Router } = require("express");

const router = Router();

// Get all teams
router.get("/", teamController.getAllTeams);

//create a team
router.post("/", teamController.createTeam);

// Get a team by id
router.get("/:id", teamController.getTeamById);

//update team
router.put("/:id", teamController.updateTeam);

// Delete team
router.delete("/:id", teamController.deleteTeam);

module.exports = router;
