const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.createUser);
router.get('/allusers', userController.getAllUsers);

module.exports = router;
