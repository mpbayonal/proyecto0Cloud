var express = require('express');
var app     = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var port = "8080";
const cors = require('cors');

const config = require('./database/DB');
const ServerPortRouter = require('./routes/ServerPortRoutes');

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
    });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/serverport', ServerPortRouter);

app.set('port', port);

module.exports = app;
