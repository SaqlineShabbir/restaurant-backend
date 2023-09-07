const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//user  related requests start
exports.getUser = async (req, res, next) => {
  try {
    const result = await User.find({ name: req.body.name });

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
    //User Already exist so
    const isExist = await User.find({ email: req.body.email });

    if (isExist && isExist[0]?.name) {
      return res.status(409).json({
        status: 'Failed',
        message: `The user already exist please login`,
      });
    }

    // save new user
    const role = 'user';
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //token
    const token = jwt.sign({ _id: User._id }, process.env.SECRET_KEY);

    const result = await User.create({
      ...req.body,
      password: hashedPassword,
      role: role,
      photo: '',
    });
    res.status(200).json({
      status: 'success',
      message: 'User Signup successfully',
      data: result,
      token: token,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err.message,
    });
  }
};

//login user
exports.loginUser = async (req, res, next) => {
  try {
    //if empty form
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: 'Failed',
        message: 'please fill up form data',
      });
    }

    //  check user exist or not
    const isExist = await User.findOne({ email: email });
    //check password matches with database
    const isValidPassword = await bcrypt.compare(password, isExist.password);

    if (isExist && isValidPassword) {
      //jwt token
      const token = await isExist.generateAuthToken();
      console.log('to..', token);
      //cookie

      res.cookie('jwt', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      res.status(200).json({
        status: 'success',
        message: 'user Logged in successfully',
        data: isExist,
        token: token,
      });
    } else {
      return res.status(400).json({
        status: 'Failed',
        message: 'Authentication failed',
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: 'Authentication failed',
    });
  }
};
