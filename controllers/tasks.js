const Task = require("../models/task");

// const Note = require("../models/note");

async function index(req, res) {
  const tasks = await Task.find({});
  res.render("tasks/index", { title: "All Tasks", tasks });
}

async function show(req, res) {
  const task = await Task.findById(req.params.id)
  res.render("tasks/show", { title: "task Detail", task});
}

function newTask(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails
  res.render("tasks/index", { title: "Add Task", errorMsg: "" });
}

async function create(req, res) {
  try {
    const task = await Task.create(req.body);
    res.redirect("/tasks");
  } catch (err) {
    res.redirect("/tasks", { errorMsg: err.message });
  }
}

module.exports = {
  index,
  show,
  new: newTask,
  create
};
