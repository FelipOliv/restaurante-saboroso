const mysql = require ("mysql2")

let host = "localhost"
let user = "root"
let database = "restaurante_saboroso"
let password = ""

const connection = mysql.createConnection({ host, user, database, password })

module.exports = connection