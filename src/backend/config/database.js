const mysql = require('mysql');

const database = mysql.createConnection({
    database: 'gym',
    user: 'root',
    host: 'localhost',
    port: 3306,
    password: 'KDElinux@mysql*1999',
})

module.exports = database;