const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router
  .route('/')
  //user related routes
  .get(userController.getUsers)
  .post(userController.createUser);
module.exports = router;
