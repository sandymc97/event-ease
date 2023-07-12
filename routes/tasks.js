var express = require('express');
var router = express.Router();
var tasksCtrl = require("../controllers/tasks");
// const ensureLoggedIn = require('../config/ensureLoggedIn');

/// ALL ROUTES DEFAULT TO /tasks
router.get("/", tasksCtrl.index);

// TO BE LOGGED IN, DELETE ABOVE LINE, KEEP BELOW LINE
// router.get("/", ensureLoggedIn, tasksCtrl.index);

// GET /tasks/:id
router.get("/:id", tasksCtrl.show);


module.exports = router;
