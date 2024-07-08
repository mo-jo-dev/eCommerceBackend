const express = require('express');
const v2router = express.Router();

const pingRouter = require('./ping_router');
const productRouter = require('./product_router');

v2router.use('/ping', pingRouter);
v2router.use('/products', productRouter);

module.exports = v2router;