const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  productId: {
    type: Number,
    require: true,
    unique: true,
    defaultValue: 1
  },
  name: String,
  count: {
    type: Number,
    require: true,
    defaultValue: 0
  },
  price: {
    type: Number,
    require: true,
    defaultValue: 0
  },
});

const Product = model('Product', productSchema);

module.exports = Product;
