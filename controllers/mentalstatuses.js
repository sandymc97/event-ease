const Task = require('../models/task');

module.exports = {
  create,
  delete: deleteMentalStatus
};


async function create(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    task.mentalStatuses.push(req.body)
    await task.save();
    res.redirect(`/tasks/${task._id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/tasks/`);
  }
}

async function deleteMentalStatus(req, res) {
  
  const task = await Task.findOne({
  });
  task.mentalStatuses.remove(req.params.id);
  await task.save();
  res.redirect(`/tasks/${task._id}`);
}