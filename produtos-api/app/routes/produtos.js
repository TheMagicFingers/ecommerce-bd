module.exports = app => {
    //INDEX - Mostra todos os produtos
    app.get('/api/produtos', (req, res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB

        listaDB.listaTodosProdutos(connection, (err, result) => {
            if (err) console.log(err)
            res.json(result)
        })
    })
    // SHOW - mostra apenas um produto pelo id
    app.get('/api/produtos/:id', (req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB
        let id = req.params.id

        listaDB.procuraPorId(connection,id, (err, result) => {
            if(err) return err
            res.json(result)
        })
    })
    //FAZER EDIT E DESTROY E UPDATE
}
