const mysql = require('mysql')

const getConnection = function () {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'teste_node'
    })
}

module.exports = { getConnection }

/*
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
*/

