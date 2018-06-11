'use strict';
var users = require('../../models/users');

exports.post = ('/',users.insert);

exports.put = ('/:id',users.edit);
   
exports.delete = ('/:id',users.delete);
