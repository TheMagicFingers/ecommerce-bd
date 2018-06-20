module.exports = {
    lista: function(conn, callback) {
        conn.query('select * from produtos', callback)
    }
    ,
    procura: function(conn, id, callback) {
        conn.query("select * from produtos where id_produtos=" + id)
    }
}