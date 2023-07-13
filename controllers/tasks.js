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
    console.log(task)
    res.redirect(`/tasks`);
  } catch (err) {
    res.render("tasks/new", { errorMsg: err.message });
  }
}

// async function create(req, res) {
//   const task = await Task.findById(req.params.id);
//   task.tasks.push(req.body);
//   try {
//     // Save any changes made to the task doc
//     await task.save();
//   } catch (err) {
//     console.log(err);
//   }
//   res.redirect(`/tasks/${task._id}`);
// }

module.exports = {
  index,
  show,
  new: newTask,
  create
};
