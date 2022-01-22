const express = require('express');
const pageController = require('../controllers/pageController');
// const tokenVerify = require('../middlewares/tokenHandler');

const router = express.Router();

// localhost:5000/api/product/brands
router.route('/brands').get(pageController.getAllBrands);

// localhost:5000/api/product/brand:id
router.route('/brand/:id').get(pageController.getBrandById);

// localhost:5000/api/product/categories
router.route('/categories').get(pageController.getAllCategories);

// localhost:5000/api/product/category:id
router.route('/category/:id').get(pageController.getCategoryById);


module.exports = router;