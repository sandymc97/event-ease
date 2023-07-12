var express = require('express');
var router = express.Router();
var tasksCtrl = require("../controllers/tasks");
// const ensureLoggedIn = require('../config/ensureLoggedIn');

/// ALL ROUTES DEFAULT TO /tasks
router.get("/", tasksCtrl.index);


// GET /tasks/:id
router.get("/:id", tasksCtrl.show);
// POST /tasks
router.post("/", tasksCtrl.create);


module.exports = router;
