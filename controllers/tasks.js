const Task = require("../models/task");

function index(req, res) {
  res.render("tasks/index", {
    tasks: Task.getAll(),
  });
}
function show(req, res) {
  res.render("tasks/show", {
    task: Task.getOne(req.params.id),
  });
}

module.exports = {
  index,
  show
};
