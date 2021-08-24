const mysql = require('mysql');
require('dotenv/config');

const database = mysql.createConnection({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
})

module.exports = database;