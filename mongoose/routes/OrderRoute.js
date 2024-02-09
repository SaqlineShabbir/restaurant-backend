const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const requireAuth = require('../middlewares/AuthMiddleWare');
router.use(requireAuth);
router.route('/:id').get(orderController.getOrderByUserId);
router.route('/:id').delete(orderController.deleteOrderById);
router.route('/:id').patch(orderController.updateOrderById);
router
  .route('/')
  .post(orderController.postOrder)

  .get(orderController.getOrders);

module.exports = router;
