const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Kaique Cavalcanti')`
connection.query(sql)

connection.query('SELECT * FROM people', function (error, results, fields) {
    if (error) throw error;

    let response = '<h1>Full Cycle</h1>';

    if(results.length > 0) {

        response += ' <ul>'

        results.forEach(person => {
            response += `<li>${person.id} - ${person.name} </li>`
        });

        response += ' </ul>'
    }

    app.get('/', (req,res) => {
        res.send(response);
    })

    connection.end()
});

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})