module.exports = app => {
    // Get user by ID
    app.get('/api/user/:id' , (req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB

        listaDB.procuraUserPorId(connection,req.params.id, (err,result) => {
            if(err) console.log (err)
            return res.json(result)
        })
    })
    //Create User
    app.post('/api/user', (req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB
        let User = {
            nome:req.params.nome,
            senha:req.params.senha,
            email:req.params.email
        }

        listaDB.procuraUserPorId(connection, User, (err,result) => {
            if(err) console.log (err)
            return res.json(result)
        })
    })

}