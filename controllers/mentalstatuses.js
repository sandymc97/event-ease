const Task = require('../models/task');

module.exports = {
  create,
//   delete: deleteMentalStatus
};

// async function deleteMentalStatus(req, res) {
//   // Note the cool "dot" syntax to query on the property of a subdoc
//   const task = await Task.findOne({ 'mentalStatuses._id': req.params.id, 'Mens.user': req.user._id });
//   // Rogue user!
//   if (!movie) return res.redirect('/movies');
//   // Remove the review using the remove method available on Mongoose arrays
//   movie.reviews.remove(req.params.id);
//   // Save the updated movie doc
//   await movie.save();
//   // Redirect back to the movie's show view
//   res.redirect(`/movies/${movie._id}`);
// }

async function create(req, res) {
  const task = await Task.findById(req.params.id);
  try {
    await task.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/tasks/${task._id}`);
}