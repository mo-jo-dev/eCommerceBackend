const express = require('express');
const router = express.Router();

const { create } = require('../../controllers/product_controller');
const { createValidator } = require('../../middlewares/product_middleware');

router.get('/', (req, res) => {
    res.json({products: []});
});

router.post('/', createValidator, create);

module.exports = router;