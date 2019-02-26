let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let apiRoutes = require('./api-routes');

let app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// var mongoDB = 'mongodb://10.102.104.177:27017/webflux_demo';
// var mongoDB = 'mongodb://10.102.104.177:27017/manifes';
var mongoDB = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.connect('mongodb://10.102.104.177:27017/webflux_demo');

var db = mongoose.connection;

var port = process.env.port || 8080;

app.get('/', (request, response) => response.send('This is built with express'));

app.use('/api', apiRoutes);

app.listen(port, function() {
    console.log("Running on port " + port);
})