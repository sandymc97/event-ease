const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/notes');


// POST /movies/:id/reviews (create review for a movie)
router.post('/tasks/:id/notes', reviewsCtrl.create);
// DELETE /mental status
// router.delete('/mentalstatuses/:id', reviewsCtrl.delete);

module.exports = router;