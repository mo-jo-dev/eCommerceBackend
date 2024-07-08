const express = require('express');
const v2router = express.Router();

const pingRouter = require('./pingRouter');
const productRouter = require('./productRouter');

v2router.use('/ping', pingRouter);
v2router.use('/products', productRouter);

module.exports = v2router;