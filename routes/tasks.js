var express = require('express');
var router = express.Router();
var tasksCtrl = require("../controllers/tasks");
// const ensureLoggedIn = require('../config/ensureLoggedIn');
/// ALL ROUTES DEFAULT TO /tasks
router.get("/", tasksCtrl.findAllTask);
// GET /tasks/:id
router.get("/:id", tasksCtrl.showTaskDetails);
// POST /tasks
router.post("/", tasksCtrl.createNewTask);
// DELETE /tasks/:id
router.delete("/:id", tasksCtrl.deleteTask);
// PUT tasks
router.post("/:id", tasksCtrl.editTask);
module.exports = router;





