const express = require('express');
const v1router = express.Router();

const pingRouter = require('./ping_router');
const productRouter = require('./product_router');

v1router.use('/ping', pingRouter);
v1router.use('/products', productRouter);

module.exports = v1router;