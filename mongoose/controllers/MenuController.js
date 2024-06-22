const Menu = require("../models/Menu");
const cloudinary = require("cloudinary");
exports.getMenus = async (req, res, next) => {
  try {
    const menus = await Menu.find({});
    res.status(200).json({
      status: "success",
      data: menus,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.postMenu = async (req, res, next) => {
  try {
    const { name, description, price, category, quantity, status } = req.body;
    const file = req.file.path;
    const cloud = await cloudinary.uploader.upload(file);
    console.log(file);
    const result = await Menu.create({
      name,
      description,
      price,
      category,
      quantity,
      status,
      photo: cloud?.url,
    });
    console.log(result);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
exports.getMenuById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findOne({ _id: id });
    res.status(200).json({
      status: "success",
      data: menu,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
exports.deleteMenu = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletemenu = await Menu.findByIdAndDelete({ _id: id });
    res.status(200).json({
      status: "success",
      data: deletemenu,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.updateMenu = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  try {
    const updatedData = { name, description, price, category };

    const updatedMenu = await Menu.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: updatedMenu,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
