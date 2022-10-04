const { Schema, model } = require('mongoose');

const inventorySchema = new Schema({
  prodDocId: Schema.ObjectId,
  productId: {
    type: Number,
    require: true
  },
  stockIn: Number,
  stockOut: Number,
  entryDate: Date,
  isDeleted: Boolean,
});

const Inventory = model('Inventory', inventorySchema);

module.exports = Inventory;
