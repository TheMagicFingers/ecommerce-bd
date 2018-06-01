module.exports = {
    lista: function(conn, callback) {
        conn.query('select * from lista', callback)
    }
    //,
    // insere: function(conn, item, callback) {
    //     conn.query(`insert into lista (item) values ('${item}')`)
    // }
}