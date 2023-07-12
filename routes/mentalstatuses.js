const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/mentalstatuses');


// POST /movies/:id/reviews (create review for a movie)
router.post('/tasks/:id/mentalstatuses', reviewsCtrl.create);
// DELETE /mental status
// router.delete('/mentalstatuses/:id', reviewsCtrl.delete);

module.exports = router;