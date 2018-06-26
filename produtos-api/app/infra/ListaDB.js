module.exports = {
    //PROTUDOS
    listaTodosProdutos: function(conn, callback) {
        conn.query('select * from produtos', callback)
    }
    ,
    procuraPorId: function(conn, id, callback) {
        conn.query(`select * from produtos where id_produtos = ${id}`,callback)
    }
    ,
    insereProduto: function(conn, Produto , callback) {
        conn.query(`insert into produtos(descricao,preco_unit,qtd_est,url_img)
                    values ('${Produto.descricao}',${Produto.preco_unit},0,'${Produto.url_img}')`, callback)
    }
    ,
    deletaProduto: function(conn, id , callback){
        conn.query(`delete from produtos where id_produtos = ${id}`,callback)
    }
    ,
    editarProduto: function(conn,Produto, callback){
        conn.query(`update produtos
                    set descricao = ${Produto.descricao},
                    preco_unit =  ${Produto.preco_unit},
                    qtd_est = ${Produto.qtd_est},
                    url_img = ${Produto.url_img}
                    where id_produtos = ${Produto.id};`, callback)
    }
    ,
    // USER
    // Criar um procedure para adicionar um usuario - necessario adicionar em tabela de enredereço também
    registrarUser: function(conn, User , callback){
        conn.query(`insert into clientes(nome_user,email_user,senha_user)
                    values ('${User.nome}','${User.email}','${User.senha}')`, callback)
    }
    ,
   inserirEndereco: function(conn, id_cliente,endereco, callback){
        conn.query(`insert into endereco(id_cliente,rua,estado,bairro,logradouro,numero)
        values ('${id_cliente}','${endereco.rua}',
        '${endereco.estado}','${endereco.bairro}',
        '${endereco.logradouro}','${endereco.numero}')`, callback)
    }
    ,
    procuraUserPorId: function(conn, id , callback) {
        conn.query(`select * from clientes where id_cliente=${id}`,callback)
    }
    ,
    //Criar session para logar user - passport-js
    login: function(conn,email,callback) {
        conn.query(`select nome_user,senha_user from clientes where email_user = '${email}'`,callback)
    }
    ,
    //NOTAS
    listaTodasNotas: function(conn, callback) {
        conn.query('select * from notaFiscalCompleta;', callback)
    }
    ,
    procuraNotaPorId: function(conn, id, callback) {
        conn.query(`select * from notaFiscalCompleta where id_cliente=${id}`,callback)
    }
    ,
    //Procedure
    criarVenda: function(conn,id_cliente,Vendas,metodo,callback){
        
        for(let i = 0 ; i < Vendas.length ; i++){
            conn.query(`call fazer_venda(${id_cliente},'${metodo}',${Vendas.produto},${Vendas.quantidade})`,callback)
        }
    }
    ,
    //Procedure
    excluirVenda: function (conn, id , callback){

    }
}