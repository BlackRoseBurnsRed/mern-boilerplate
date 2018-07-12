const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const path           = require('path');
const db             = require('./../config/db');
const mongoose       = require('mongoose').connect(db.url)

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    require('./routes')(app, database);
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/../client', 'index.html'))
    });

    app.listen(8080, () => {
        console.log('We are live on ' + 8080);
    });

})