const Task = require("../models/task");
// const Note = require("../models/note");

async function index(req, res) {
  const tasks = await Task.find({});
  res.render("tasks/index", { title: "All Tasks", tasks });
}

function show(req, res) {
  res.render("tasks/show", {
    task: Task.getOne(req.params.id),
  });
}

function newTask(req, res) {
  res.render("tasks/new", { title: "Add Task", errorMsg: "" });
}

// async function create(req, res) {
//   try {
//     const task = await Task.create(req.body);
//     res.redirect(`/tasks/${task._id}`);
//   } catch (err) {
//     console.log(err);
//     res.render("tasks/new", { errorMsg: err.message });
//   }
// }


// async function show(req, res) {
//   const task = await Task.findById(req.params.id).populate("cast");
//   const notes = await Note.find({ _id: { $nin: task.cast } }).sort("name");
//   res.render("tasks/show", { title: "Task Detail", movie, notes });
// }

module.exports = {
  index,
  show,
  new: newTask,
  // create
};
