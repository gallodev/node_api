'use strict';
var users = require('../../models/users');

exports.get = ('/:id',users.get);

exports.post = ('/',users.insert);

exports.put = ('/:id',users.edit);
   
exports.delete = ('/:id',users.delete);
