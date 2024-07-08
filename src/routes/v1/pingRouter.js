const express = require('express');
const router = express.Router();

const { pingV1 } = require('../../controllers/pingController');

router.get('/', pingV1);

module.exports = router;