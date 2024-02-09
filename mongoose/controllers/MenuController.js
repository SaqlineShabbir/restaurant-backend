const Menu = require('../models/Menu');

exports.getMenus = async (req, res, next) => {
  try {
    const menus = await Menu.find({});
    res.status(200).json({
      status: 'success',
      data: menus,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};

exports.postMenu = async (req, res, next) => {
  try {
    const result = await Menu.create(req.body);
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
exports.getMenuById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: menu,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message,
    });
  }
};
