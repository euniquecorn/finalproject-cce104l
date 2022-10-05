const { Router } = require('express');
const { Inventory } = require('../models');
const { InventoryService } = require('../services');

const inventoryRoutes = Router();

inventoryRoutes.get('/', async (req, res) => {
  const { query } = req;
  query.isDeleted = undefined;

  const inventory = await InventoryService.stocksCount();

  res.status(200).send({
    message: 'Success',
    code: 200,
    data: inventory
  });
});

inventoryRoutes.post('/', async (req, res) => {
  try {
    const { body } = req;
    if (typeof body !== 'object') {
      throw new Error('Invalid payload, must be json format.');
    }

    const newStockIn = new Inventory(body);
    newStockIn.save((err, result) => {
      if (err) {
        const errMessage = `Product stock in save error: ${err.message || err.stack || err}` ;
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
      message: error || 'Failed to save inventory',
      code: 500,
      error
    });
  }
});

inventoryRoutes.patch('/:id', async (req, res) => {
  const { params: { id }, body } = req;

  console.log(req.params, body);

  try {
    Inventory.findOneAndUpdate(
      { _id: id },
      body,
      (result) => {
        res.status(200).send({
          message: `Inventory ${id} successfully updated.`,
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

inventoryRoutes.delete('/:id', async (req, res) => {
  const { params: { id } } = req;

  try {
    Inventory.findOneAndUpdate(
      { _id: id },
      { isDeleted: true },
      (result) => {
        res.status(200).send({
          message: `Inventory ${id} item successfully deleted.`,
          code: 200,
          data: result
        });
      }
    );
  } catch(err) {
    const error = err.message || err.stack || err;
    console.log('Delete inventory item - error: ', error);

    res.status(500).send({
      message: 'Failed to delete inventory.',
      code: 500,
      error
    });
  }
});

module.exports = inventoryRoutes;
