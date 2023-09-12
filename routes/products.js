const express = require('express');
const {
  getAllProductsStatic,
  getAllProducts,
  createProduct,
} = require('../controllers/products');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
