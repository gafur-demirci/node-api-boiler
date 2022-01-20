const express = require('express');
const pageController = require('../controllers/pageController');
const tokenVerify = require('../middlewares/tokenHandler');

const router = express.Router();

// localhost:5000/brands
router.route('/brands').get(tokenVerify,pageController.getAllBrands);

// localhost:5000/categories
router.route('/categories').get(tokenVerify,pageController.getAllCategories);

// localhost:5000/categories:id
router.route('/categories/:id').get(tokenVerify,pageController.getCategoryById);


module.exports = router;