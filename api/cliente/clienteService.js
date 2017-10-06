const express = require('express')
const database = require('../../config/database')
const Cliente = express.Router()

Cliente.get('', (req, res) => {
    let connection = database.getConnection()

    connection.query('select * from cliente', function (err, results) {
        res.json(results)
    })

    connection.end()
})

Cliente.post('', (req, res) => {
    let cliente = req.body;

    let connection = database.getConnection()

    connection.query(
       `insert into cliente(nome, email, senha)
        values('${cliente.nome}', '${cliente.email}', '${cliente.senha}')`, function (err, results) {
            res.json({ status: 1 })
        })

    connection.end()
})

Cliente.put('/:id', (req, res) => {
    let cliente = req.body;
    let connection = database.getConnection()

    connection.query(
        `update cliente set
            nome = '${cliente.nome}',
            email = '${cliente.email}',
            senha = '${cliente.senha}'
         where id = ${req.params.id}`, function (err, results) {
            res.json({ status: 1 })
        })

    connection.end()
})

Cliente.delete('/:id', (req, res) => {
    let connection = database.getConnection()

    connection.query(
        `delete from cliente where id = ${req.params.id}`,
        function (err, results) {
            res.json({ status: 1 })
        })

    connection.end()
})

Cliente.get('/:id', (req, res) => {
    let connection = database.getConnection()

    connection.query(`select * from cliente where id = ${req.params.id}`, function (err, results) {
        res.json(results)
    })

    connection.end()
})

module.exports = Cliente