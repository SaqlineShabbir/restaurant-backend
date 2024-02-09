const express = require('express');
const router = express.Router();
const menuController = require('../controllers/MenuController');
const requireAuth = require('../middlewares/AuthMiddleWare');

router
  .route('/')
  .post(menuController.postMenu)

  .get(menuController.getMenus);
router.route('/:id').get(menuController.getMenuById);

module.exports = router;
