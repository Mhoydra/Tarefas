const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senacrs',
    database: 'sistema_tarefas'
});

//testar a conexão
connection.connect((err) =>{
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL')
    });

    module.exports = db;