const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds221095.mlab.com:21095/productstutorial'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/products', product);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
})