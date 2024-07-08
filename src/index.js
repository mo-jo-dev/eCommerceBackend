const express = require('express');
const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/apiRouter');

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log("Server Started on Port:",PORT);
})