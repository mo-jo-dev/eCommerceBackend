const express = require('express');
const router = express.Router();

const { productV1 } = require('../../controllers/pingController');

router.get('/', productV1);

module.exports = router;