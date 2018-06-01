module.exports = {
    lista: function(conn) {
        conn.query('select * from produtos')
    }
    //,
    // insere: function(conn, item, callback) {
    //     conn.query(`insert into produtos (item) values ('${item}')`)
    // }
    // não precisa do callback
}