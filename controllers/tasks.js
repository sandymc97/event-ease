const taskDB = require("../models/task");

async function findAllTask(_req, res) {
  const tasks = await taskDB.find({});
  res.render("tasks/index", { title: "All Tasks", tasks });
}

async function showTaskDetails(req, res) {
  const task = await taskDB.findById(req.params.id);
  res.render("tasks/show", { title: "Task Detail", task });
}


function newTask(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails yes
  res.render("tasks/index", { title: "Add Task", errorMsg: "" });



async function deleteTask(req, res) {
  try {
    await taskDB.deleteOne({ _id: req.params.id });
    res.redirect("/tasks");
  } catch (err) {
    res.redirect("/tasks", { errorMsg: err.message });
  }
}

async function editTask(req, res) {
  try {
    await taskDB.updateOne({ _id: req.params.id }, req.body);
    res.redirect("/tasks");
  } catch (error) {
    res.redirect("/tasks", { errorMsg: error.message });
  }
}

module.exports = {
  findAllTask,
  showTaskDetails,
  createNewTask,
  deleteTask,
  editTask,
};
