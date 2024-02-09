const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({
      message: 'Authorization Failed',
    });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET_KEY);
    console.log(_id);
    req.user = await User.findOne({ _id }).select('_id');
    console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
};
module.exports = requireAuth;
