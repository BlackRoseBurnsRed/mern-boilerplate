const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const path           = require('path');

require('./routes/routes.js')(app, {});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client', 'index.html'))
});

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});