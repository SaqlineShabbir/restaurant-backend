const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/ReviewController');
const requireAuth = require('../middlewares/AuthMiddleWare');
router.use(requireAuth);
router.route('/:id').get(reviewController.getReviewByMenuId);
// router.route('/:id').delete(orderController.deleteOrderById);
// router.route('/:id').patch(orderController.updateOrderById);
router
  .route('/')
  .post(reviewController.postReview)

  .get(reviewController.getReviews);

module.exports = router;
