var express = require('express');
var router = express.Router();
var tasksCtrl = require("../controllers/tasks");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// GET /tasks
router.get("/", tasksCtrl.index);

// GET /tasks/:id
router.get("/:id", tasksCtrl.show);


module.exports = router;
