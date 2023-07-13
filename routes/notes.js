const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');


// POST /tasks/:id/notes (create review for a movie)
router.post('/tasks/:id/notes', notesCtrl.create);
// DELETE /notes
router.delete("/reviews/:id", ensureLoggedIn, notesCtrl.delete);

module.exports = router;