const Task = require('../models/task');

module.exports = {
  create,
  delete: deleteNote
};


async function create(req, res) {
  const task = await Task.findById(req.params.id);
  task.notes.push(req.body);
  try {
    await task.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/tasks/${task._id}`);
}

async function deleteNote(req, res) {
  
  const task = await Task.findOne({
  });
  task.notes.remove(req.params.id);
  await task.save();
  res.redirect(`/tasks/${task._id}`);
}