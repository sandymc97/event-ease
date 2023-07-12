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


module.exports = {
  index,
  show,
  // new: newTask,
  // create
};
