const express = require('express');
const router = express.Router();
const mentalStatusesCtrl = require('../controllers/mentalstatuses');


// POST /movies/:id/reviews 
router.post('/tasks/:id/mentalstatuses', mentalStatusesCtrl.create);
// DELETE /mental status
router.delete('/mentalstatuses/:id/:taskid', mentalStatusesCtrl.delete);

module.exports = router;