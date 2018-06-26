module.exports = app =>{
    // INDEX - mostra todas as notas
    app.get('/api/notas', (req, res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB

        listaDB.listaTodasNotas(connection,id,(err,result) => {
            if(err) console.log(err)
            return res.json(result)
        })

    })
    //NEW - adiciona uma nota/venda
    app.post('/api/notas',(req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB
        let id_cliente = req.body.id_cliente;
        let metodo = req.body.metodo;
        let produtos = req.body.produtos;
        
        let vendas = []

        for(let i = 0 ; i < produtos.length ; i++){
            let temp =  {}
            temp.id_produto =  produtos[i].id_produto;
            temp.qtd =  produtos[i].qtd;
            vendas.push(temp);
        }

        listaDB.criarVenda(connection,id_cliente,vendas,metodo,(err, result) => {
            if(err) console.log(err)
            return res.json(result)
        })
    })
    // SHOW - mostra apenas uma nota pelo id
    app.get('/api/notas/:id', (req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB
        let id = req.params.id

    listaDB.procuraNotaPorId(connection,id,(err,result) => {
        if(err) console.log(err)
        return res.json(result)
    })
      
    })
}