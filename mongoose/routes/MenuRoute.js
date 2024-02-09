const express = require('express');
const router = express.Router();
const menuController = require('../controllers/MenuController');
const requireAuth = require('../middlewares/AuthMiddleWare');
const upload = require('../../middlewares/FileUpload');


router
  .route('/')
  .post(upload.single('photo'), menuController.postMenu)
  .get(menuController.getMenus);
router.route('/:id').get(menuController.getMenuById);

module.exports = router;
