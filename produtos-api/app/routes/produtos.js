module.exports = app => {
    app.get('/api/produtos', (req, res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB

        listaDB.lista(connection, (err, result) => {
            if (err) console.log(err)
            res.json(result)
        })

    })
}

