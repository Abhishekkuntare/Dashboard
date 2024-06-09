
const express = require('express');
const router = express.Router();
const pieDataController = require('../controllers/PieDataController');

router.get('/pieData', pieDataController.getPieData);

module.exports = router;
