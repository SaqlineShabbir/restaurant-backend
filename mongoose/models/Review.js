const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
//schema design
const ReviewSchema = mongoose.Schema(
  {
    menu: {
      type: ObjectId,
      required: true,
      ref: 'Menu',
    },
    user: {
      type: ObjectId,
      required: true,
      ref: 'User',
    },

    message: {
      type: String,
      required: [true, 'please provide description'],
      trim: true,
    },
  },
  { timeStamp: new Date() }
);

//model
const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
