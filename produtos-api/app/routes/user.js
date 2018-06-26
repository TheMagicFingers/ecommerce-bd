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
    app.post('/api/user/login', (req,res) => {
        let connection = app.infra.connectionFactory()
        let listaDB = app.infra.ListaDB
        
        let User = {
            senha:req.body.senha,
            email:req.body.email
        }
        
        if(User.email === "admin@gmail.com" && User.senha === "admin"){
            return res.json({"Login": "Admin"})
        }

        listaDB.login(connection, User.email, (err,result) => {
            if(User.senha === result[0].senha_user ){
                return res.json({
                    "Login":"Sucesso",
                    "nome":result[0].nome_user
            })
            }
            else{
                console.log (err)
                return res.json({"Login":"Falha"})
            }
        })
    })

}