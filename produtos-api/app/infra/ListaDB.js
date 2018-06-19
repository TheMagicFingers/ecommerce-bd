module.exports = {
    lista: function(conn, callback) {
        conn.query('select * from produtos', callback)
    }
    ,
    procuraPorId: function(conn, id, callback) {
        conn.query(`select * from produtos where id_produtos = ${id}`,callback)
    }
    ,
    vendido: function(conn , id ,callback){
        conn.query(`update produtos
                    set qtd_est = qtd_est - 1
                    where id_produtos = ${id}`, callback)
    }
    ,
    criarUser: function(conn, User , callback){
        conn.query(`insert into clientes(nome_user,email_user,senha_user)
                    values (${User.nome},${User.email},${User.senha})`, callback)
    }

}