const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//schema design
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a name'],
    minLength: [1, 'minimum length 1 word'],
    maxLength: [100, 'maximum length 100 word'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'please provide an email address'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
  },
  role: String,
  photo: String,
});

//generate token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });

    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

//model
const User = mongoose.model('User', userSchema);

module.exports = User;
