const express = require('express');
const {PORT} = require('./config/server_config');
const responseTime = require('response-time');
const apiRoutes = require('./routes/api_router');
const bodyParser = require('body-parser');

const app = express();

app.use(responseTime(function(req, res, time){
    console.log(time + "ms");
    res.setHeader('X-Response-Time', time);
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log("Server Started on Port:",PORT);
})