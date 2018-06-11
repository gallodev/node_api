'use strict';

const app = require('../src/app');
const http = require('http');
const server = http.createServer(app);
const mysql = require('mysql');

const port = 3000;

app.set('port',port);

server.listen(port);
console.log('APP works');
