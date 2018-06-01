let mysql = require('mysql')

function createDBConnection() {

    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'dbstore'
    })

    connection.connect(err => {
        if (err) throw err
    })

    return connection
}

module.exports = () => {
    return createDBConnection
}