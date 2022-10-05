const moment = require('moment');
const { Products, Inventory } = require("../models");

const stocksCount = async () => {
  let stockCount = [];

  const query = {
    isDeleted: undefined
  };
  const products = await Products.find(query).lean();

  if (products && products.length) {
    for (let product of products) {
      let totalStockIn = 0;
      let totalStockOut = 0;
      let totalStockRem = 0;

      const inventories = await Inventory.find({ ...query, prodDocId: product._id });
      inventories.forEach((inventory) => {
        totalStockIn += inventory.stockIn;
        totalStockOut += inventory.stockOut;
        totalStockRem = totalStockIn - totalStockOut;
      });

      stockCount.push({
        prodDocId: product._id,
        productId: product.productId,
        productName: product.name,
        unitPrice: product.price,
        totalStockIn,
        totalStockOut,
        totalStockRem,
        inventories: inventories.map((inv) => {
          return { ...inv._doc, createdAt: moment(inv.createdAt).format('MM-DD-YYYY') };
        })
      });
    }
  }

  console.log('stockCount: ', JSON.stringify(stockCount[0]));

  return stockCount;
}

module.exports = { stocksCount };
