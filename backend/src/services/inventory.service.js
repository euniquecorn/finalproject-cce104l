const { Products, Inventory } = require("../models");

const stocksCount = async () => {
  let stockCount = [];

  const query = {
    isDeleted: undefined
  };
  const products = await Products.find(query);

  if (products && products.length) {
    for (let product of products) {
      let totalStockIn = 0;
      let totalStockOut = 0;
      let totalRemStocks = 0;

      const inventories = await Inventory.find({ prodDocId: product._id });
      inventories.forEach((inventory) => {
        totalStockIn += inventory.stockIn;
        totalStockOut += inventory.stockOut;
        totalRemStocks = totalStockIn - totalStockOut;
      });

      stockCount.push({
        prodDocId: product._id,
        productId: product.productId,
        productName: product.name,
        totalStockIn,
        totalStockOut,
        totalRemStocks,
        inventories
      });
    }
  }

  console.log('stockCount: ', stockCount);

  return stockCount;
}

module.exports = { stocksCount };
