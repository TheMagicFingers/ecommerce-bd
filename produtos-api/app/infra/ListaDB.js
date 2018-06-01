module.exports = {
    lista: function(conn, callback) {
        conn.query('select * from produtos', callback)
    }
    //,
    // insere: function(conn, item, callback) {
    //     conn.query(`insert into produtos (item) values ('${item}')`)
    // }
}