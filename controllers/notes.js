const Task = require('../models/task');

module.exports = {
  create,
  delete: deleteNote
};


async function create(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    task.notes.push(req.body)
    await task.save();
    res.redirect(`/tasks/${task._id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/tasks/`);
  }
}

async function deleteNote(req, res) {
  const task = await Task.findOne({
  });
  task.notes.remove(req.params.id);
  await task.save();
  res.redirect(`/tasks/${task._id}`);
}