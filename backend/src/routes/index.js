const { Router } = require('express');
const products = require('./products.routes');

const apiRoutes = Router();

apiRoutes.use('/products', products);

module.exports = apiRoutes;
