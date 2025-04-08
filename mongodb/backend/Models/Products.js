const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  errorCode: {
    type: String,
    default: 'N/A', // Optional default
  }
});

module.exports = mongoose.model('Products', ProductSchema);
