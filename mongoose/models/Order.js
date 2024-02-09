const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
//schema design
const OrderSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'please provide a name'],
      minLength: [1, 'minimum length 1 word'],
      maxLength: [100, 'maximum length 100 word'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'please provide description'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'please provide price'],
    },
    total: {
      type: Number,
      required: [true, 'please provide price'],
    },
    photo: {
      type: String,
      required: [true, 'please provide photo'],
    },
    category: {
      type: String,
      required: [true, 'please provide category name'],
    },
    quantity: {
      type: Number,
    },
    status: {
      type: String,
      required: [true, 'please provide status'],
      enum: {
        values: ['in-stock', 'out-of-stock'],
      },
    },
  },
  { timeStamp: new Date() }
);

//model
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
