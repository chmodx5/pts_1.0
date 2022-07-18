//takes care of aything to do with the person
//CRUD a person
const personController = require("../controllers/personController.js");
const { Router } = require("express");

const router = Router();

// Get all persons
router.get("/", personController.getAllPersons);

//create a person
router.post("/", personController.createPerson);

// Get a person by id
router.get("/:id", personController.getPersonById);

//update person
router.put("/:id", personController.updatePerson);

// Delete person
router.delete("/:id", personController.deletePerson);

module.exports = router;
