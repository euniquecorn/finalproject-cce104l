const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  productId: {
    type: Number,
    require: true,
    unique: true,
    defaultValue: 1
  },
  name: String,
  price: {
    type: Number,
    require: true,
    defaultValue: 0
  },
  isDeleted: {
    type: Boolean,
    require: true,
    defaultValue: false
  },
});

const Product = model('Product', productSchema);

module.exports = Product;
