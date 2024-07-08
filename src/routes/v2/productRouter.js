const express = require('express');
const router = express.Router();

const { productV2 } = require('../../controllers/pingController');

router.get('/', productV2);

module.exports = router;