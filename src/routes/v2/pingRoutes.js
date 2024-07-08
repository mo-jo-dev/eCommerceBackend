const express = require('express');
const router = express.Router();

const { pingV2 } = require('../../controllers/pingController');

router.get('/ping', pingV2);


module.exports = router;