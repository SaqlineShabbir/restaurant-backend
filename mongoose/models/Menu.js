const mongoose = require('mongoose');

//schema design
const MenuSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please provide a name'],
      minLength: [1, 'minimum length 1 word'],
      maxLength: [100, 'maximum length 100 word'],
      trim: true,
      unique: true,
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
const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
