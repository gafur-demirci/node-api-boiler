const express = require("express");
const router = express.Router();

const userRoute = require('../routes/userRoute');
const productRoute = require('../routes/productRoute');

router.use('/user', userRoute);
router.use('/product', productRoute);