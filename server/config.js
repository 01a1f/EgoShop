const mysql = require('mysql');
const client = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin123',
    database:'ego'
})
module.exports = client