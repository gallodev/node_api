const con = require('../src/db/db');

exports.list = function(req,res){      
      
    con.query('SELECT * FROM TB_USER',function(err,row){
        if(err) 
            console.log("Get list error %s",err);

        res.json(row);
    });    
};

exports.insert = function(req,res){
    var input = JSON.parse(JSON.stringify(req.body));
    var last_id = 0;

    con.query('SELECT ID FROM TB_USER ORDER BY ID DESC LIMIT 1',function(err,row){
        if(err)
            console.log("Get last id error %s",err);

        last_id = row.ID;
    });

    var data = {
        ID : last_id + 1,
        NAME    : input.NOME,
        LAST_NAME : input.SOBRENOME,
        EMAIL   : input.EMAIL,
        PASSWORD   : input.SENHA 
    }

    console.log(data);

    con.query("INSERT INTO TB_USER VALUES(?)",data,function(err,rows){
        if(err)
            console.log("Inserting error %s",err);

        console.log(rows);
        res.json({"success":true,"message":"Registro inserido com sucesso!"});
    });

}

exports.edit = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    var data = {            
        NAME    : input.NOME,
        LAST_NAME : input.SOBRENOME,
        EMAIL   : input.EMAIL,
        PASSWORD   : input.SENHA 
    
    };
    
    con.query("UPDATE TB_USER set ? WHERE id = ? ",[data,id], function(err, rows)
    {

      if (err)
          console.log("Error Updating : %s ",err );
    
        res.json({"success":true,"message":"Registro "+id+" atualizado com sucesso "});
      
    });

}

exports.delete = function(req,res){
    var id = req.params.id;

    con.query("DELETE FROM TB_USER WHERE id = ? ",id,function(err,rows){
        if(err)
            console.log("Error Deleting : %s ",err);

        res.json({"success":true,"message":"Registro "+id+" deletado com sucesso "});

    });

}
