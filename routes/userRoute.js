const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// localhost:5000/api/user/register
router.route('/register').post(userController.register);
// localhost:5000/api/user/login
router.route('/login').post(userController.login);

module.exports = router;