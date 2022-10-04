const { Router } = require('express');
const products = require('./products.routes');
const inventory = require('./inventory.routes');

const apiRoutes = Router();

// REGISTER ROUTES HERE
apiRoutes.use('/products', products);
apiRoutes.use('/inventory', inventory);

module.exports = apiRoutes;
