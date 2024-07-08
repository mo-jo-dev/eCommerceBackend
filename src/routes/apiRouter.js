const express = require('express');
const apiRouter = express.Router()

const pingRoutesV1 = require('./v1/pingRoutes');
const pingRoutesV2 = require('./v2/pingRoutes');

apiRouter.use('/v1', pingRoutesV1);
apiRouter.use('/v2', pingRoutesV2);

module.exports = apiRouter;