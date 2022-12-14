const { Router } = require('express');
const { Schema: { ObjectId } } = require('mongoose');
const { Products } = require('../models');

const ordersRoutes = Router();

ordersRoutes.get('/', async (req, res) => {
  const { query } = req;
  query.isDeleted = undefined;

  const products = await Products.find(query);
  res.status(200).send({
    message: 'Success',
    code: 200,
    data: products
  });
});

ordersRoutes.post('/', async (req, res) => {
  try {
    const { body } = req;
    console.log('typeof body: ', typeof body, body);
    if (typeof body !== 'object') {
      throw new Error('Invalid payload, must be json format.');
    }

    const newProduct = new Products(body);
    console.log('newProduct: ', newProduct);

    newProduct.save((err, result) => {
      if (err) {
        const errMessage = `Product save error: ${err.message || err.stack || err}` ;
        throw new Error(errMessage);
      }

      res.status(200).send({
        message: 'Success',
        code: 200,
        data: result
      });
    });
  } catch(err) {
    const error = err.message || err.stack || err;
    return res.status(500).send({
      message: error || 'Failed to save product',
      code: 500,
      error
    });
  }
});

ordersRoutes.patch('/:id', async (req, res) => {
  const { params: { id }, body } = req;

  console.log(req.params, body);

  try {
    Products.findOneAndUpdate(
      { _id: id },
      body,
      (result) => {
        res.status(200).send({
          message: `Product ${id} successfully updated.`,
          code: 200,
          data: result
        });
      }
    );
  } catch(err) {
    const error = err.message || err.stack || err;
    console.log('Update product - error: ', error);

    res.status(500).send({
      message: 'Failed to update product',
      code: 500,
      error
    });
  }
});

ordersRoutes.delete('/:id', async (req, res) => {
  const { params: { id } } = req;

  try {
    Products.findOneAndUpdate(
      { _id: id },
      { isDeleted: true },
      (result) => {
        res.status(200).send({
          message: `Product ${id} successfully deleted.`,
          code: 200,
          data: result
        });
      }
    );
  } catch(err) {
    const error = err.message || err.stack || err;
    console.log('Delete product - error: ', error);

    res.status(500).send({
      message: 'Failed to delete product',
      code: 500,
      error
    });
  }
});

module.exports = ordersRoutes;
