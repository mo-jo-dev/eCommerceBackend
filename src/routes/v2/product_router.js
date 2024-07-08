const express = require('express');
const router = express.Router();

const { productV2 } = require('../../controllers/ping_controller');

router.get('/', productV2);

module.exports = router;