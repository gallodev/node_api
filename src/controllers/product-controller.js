'use strict';
var users = require('../../models/users');

exports.post = ('/',(req,res,next) => {
    res.status(201).send(

        //req.body
    );
});

exports.put = ('/:id',users.edit);
   

exports.delete = ('/:id',(req,res,next) => {
    const id = req.params.id;
    res.status(200).send({
        id : id
    });
});
