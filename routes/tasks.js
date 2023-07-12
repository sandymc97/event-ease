var express = require('express');
var router = express.Router();
var tasksCtrl = require("../controllers/tasks");

/// ALL ROUTES DEFAULT TO /tasks
router.get("/", tasksCtrl.index);

// GET /tasks/new
// router.get('/new', tasksCtrl.new);

// GET /tasks/:id
router.get("/:id", tasksCtrl.show);
// POST /tasks
router.post("/", tasksCtrl.create);


module.exports = router;
