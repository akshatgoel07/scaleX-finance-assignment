const mongoose = require('mongoose');
const express = require('express')
const app = express();
const routes = require('./routes/routes');
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://akshatg:PB7HF6MfxZ7YpoyT@cluster0.zevi4uy.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/', routes);

var port = process.env.PORT || 3001;

app.listen(port);