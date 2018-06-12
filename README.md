# node_api
Simple api with Node.js

Api simples em Node.js com Mysql

Alterar o arquivo db/db.js com as configurações do banco de dados

var con = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : "",
    database : "banco"
});

Schema de banco de dados 

CREATE TABLE `TB_USER` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LAST_NAME` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EMAIL` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PASSWORD` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) 

Em models/user.js o consumo da API é na tabela TB_USER basta alterar para trabalhar com outras tabelas


