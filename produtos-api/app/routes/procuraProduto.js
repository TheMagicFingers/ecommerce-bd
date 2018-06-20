module.exports = app =>{
    app.get('/api/produtos/:id', (req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.listaDB
        let id = req.params.id
        
         listaDB.procura(connection,id,(err, result) => {
             if(err) console.log(err)
             res.json(result)
         })
    })
}
