const mongoose = require('mongoose');
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
});

//model
const User = mongoose.model('User', userSchema);

module.exports = User;
