module.exports = {
    lista: function(conn, callback) {
        conn.query('select * from produtos', callback)
    }
    ,
    procuraPorId: function(conn, id, callback) {
        conn.query(`select * from produtos where id_produtos = ${id}`,callback)
    }
    ,
    procuraUserPorId: function(conn, id , callback) {
        conn.query(`select * from clientes where id_cliente=${id}`,callback)
    }
    ,
    criarUser: function(conn, User , callback){
        conn.query(`insert into clientes(nome_user,email_user,senha_user)
                    values (${User.nome},${User.email},${User.senha})`, callback)
    }
    
}