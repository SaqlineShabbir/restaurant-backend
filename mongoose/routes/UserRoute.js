const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');
const requireAuth = require('../middlewares/AuthMiddleWare');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.patch('/make-admin', userController.makeAdminUser);
//user related routes
// .get(userController.getUsers)
router.get('/users', requireAuth, userController.getUsers);

module.exports = router;
