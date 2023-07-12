var express = require('express');
var router = express.Router();
var tasksCtrl = require("../controllers/tasks");

/// ALL ROUTES DEFAULT TO /tasks
router.get("/", tasksCtrl.index);

// GET /tasks/:id
router.get("/:id", tasksCtrl.show);


module.exports = router;
