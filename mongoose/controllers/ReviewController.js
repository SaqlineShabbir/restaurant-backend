const Review = require('../models/Review');

exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      status: 'success',
      data: reviews,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.postReview = async (req, res, next) => {
  try {
    const result = await Review.create(req.body);
    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.getReviewByMenuId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reviews = await Review.find({ menu: id }).populate('user');
    res.status(200).json({
      status: 'success',
      data: reviews,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};
exports.deleteOrderById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.deleteOne({ _id: id });
    res.status(200).json({
      status: 'success',
      message: 'Order deleted successfully',
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: 'could not delete order',
    });
  }
};
exports.updateOrderById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.updateOne({ _id: id }, { $set: req.body });
    res.status(200).json({
      status: 'success',
      message: 'Order updated successfully',
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: 'could not update order',
    });
  }
};
