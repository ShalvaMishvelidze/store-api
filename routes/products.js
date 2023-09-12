const express = require('express');
const {
  getAllProductsStatic,
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
