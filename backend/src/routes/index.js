const { Router } = require('express');
const products = require('./products.routes');

const apiRoutes = Router();

// REGISTER ROUTES HERE
apiRoutes.use('/products', products);

module.exports = apiRoutes;
