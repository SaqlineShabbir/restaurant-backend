const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
//user related routes
// .get(userController.getUsers)

module.exports = router;