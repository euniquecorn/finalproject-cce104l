const { Schema, model } = require('mongoose');

const inventorySchema = new Schema({
  prodDocId:
  {
    type: Schema.ObjectId,
    required: true
  },
  productId: {
    type: Number,
    required: true
  },
  stockIn: {
    type: Number,
    default: 0
  },
  stockOut: {
    type: Number,
    default: 0
  },
  isDeleted: Boolean,
},
{
  timestamps: true
});

const Inventory = model('Inventory', inventorySchema);

module.exports = Inventory;
