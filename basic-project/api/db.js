const mysql = require('mysql2')

const db = mysql.createConnection({
  host: "172.23.94.17",
  user: "root_wsl",
  password: "Ryz33r015.lht",
  database: "apinode"
})

module.exports = db