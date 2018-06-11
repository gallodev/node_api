'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// rotas
const index  = require('../routes/index-route');
const users  = require('../routes/users-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/users',users);

module.exports = app;