const express = require('express');
const router = express.Router();

const { pingV2 } = require('../../controllers/ping_controller');

router.get('/', pingV2);

module.exports = router;