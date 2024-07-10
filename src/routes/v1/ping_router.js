const express = require('express');
const router = express.Router();


const { pingV1 } = require('../../controllers/ping_controller');

function checkRequest(request, response, next){
    console.log("Checking the request");
    next();
}

function logger(request, response, next){
    console.log("Logging Request");
    next();
}

function authChecker(request, response, next){
    console.log("Auth Checked");
    next();
}

router.get('/', [checkRequest, logger, authChecker] , pingV1);

module.exports = router;