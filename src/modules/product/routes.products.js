const express = require('express');
const productService = require('./service.product'); // Sin .js al final en CommonJS
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await productService.findAll();
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.post('/insert-many', async (req, res) => {
  try {
    const products = await productService.insertMany(req.body);
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router; // Cambiar exportación a CommonJS
