'use strict';

const express = require('express');
const router = express.Router();
const user = require('../models/users');

const route = router.get('/',user.list);
//});

module.exports = route;