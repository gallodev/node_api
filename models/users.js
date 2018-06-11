const con = require('../src/db/db');

exports.list = function(req,res){        
    var query = con.query('SELECT * FROM TB_USER',function(err,row){
        if(err) throw err;
       res.json(row);
    });    
};