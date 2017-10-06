const mysql = require('mysql')

const getConnection = function () {
    let configuracao = {
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'teste_node'
    }

    if (process.env.NODE_ENV == 'production') {
        var urlConexao = process.env.CLEARDB_DATABASE_URL
        var grupos = urlConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/)
        configuracao.host = gurpos[3]
        configuracao.user = gurpos[1]
        configuracao.password = gurpos[2]
        configuracao.database = gurpos[4]
    }

    return mysql.createConnection(configuracao)
}

module.exports = { getConnection }

/*
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
*/

