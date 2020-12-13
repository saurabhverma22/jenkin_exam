const mysql = require('mysql2')

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'mysql',
        port: 9090,
        connectionLimit: 20
    }
)

module.exports = pool;