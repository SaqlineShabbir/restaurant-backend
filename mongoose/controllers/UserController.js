const User = require('../models/User');

//user  related requests start
exports.getUsers = async (req, res, next) => {
  try {
    const result = await User.find({});

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
  }
};

//post user
exports.createUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'data updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
  }
};
