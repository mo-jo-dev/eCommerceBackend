const express = require('express');
const {PORT} = require('./config/server_config');

const apiRoutes = require('./routes/api_router');

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log("Server Started on Port:",PORT);
})