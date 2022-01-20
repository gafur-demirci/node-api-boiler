const express = require('express');
const userController = require('../controllers/userController');
const getToken = require('../middlewares/jwtToken');
const tokenVerify = require('../middlewares/tokenHandler');

const router = express.Router();

// localhost:5000/user/register
router.route('/register').post(getToken,userController.register);
// localhost:5000/user/login
router.route('/login').get(tokenVerify,userController.login);

module.exports = router;