const express = require('express');
const {
  getAllProductsStatic,
  getAllProducts,
  createProduct,
  getProduct,
} = require('../controllers/products');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
