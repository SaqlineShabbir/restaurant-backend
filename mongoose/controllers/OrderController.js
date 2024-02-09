const Order = require('../models/Order');

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({
      status: 'success',
      data: orders,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.postOrder = async (req, res, next) => {
  try {
    const isExist = await Order.findOne({ name: req.body.name });
    const selectedOrderId = isExist?._id;

    if (isExist) {
      const updateResult = await Order.updateOne(
        { _id: selectedOrderId },
        { $set: req.body }
      );

      res.status(200).json({
        status: 'success',
        message: 'updated successfully',
        data: updateResult,
      });
    } else {
      const result = await Order.create({
        ...req.body,
        user: req.user,
      });
      res.status(200).json({
        status: 'success',
        data: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};
exports.getOrderByUserId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.find({ user: id });
    res.status(200).json({
      status: 'success',
      data: order,
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
