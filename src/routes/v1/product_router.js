const express = require('express');
const router = express.Router();

const { productV1 } = require('../../controllers/ping_controller');

router.get('/', productV1);

module.exports = router;