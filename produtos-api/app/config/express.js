const express = require('express')
const load = require('express-load')
const seedDB = require('../db/seed')

module.exports = () => {

    let app = express()
    
    //Usar apenas 1 vez quando for criado o servidor para poder adicionar elementos ao banco de dados
    //seedDB()

    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.set('json spaces', 4)
    
    
app.use((req,res,next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Headers', 
    'Origin , X-Request-With ,Content-Type, Accept , Authorization')
    if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})
    
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app)

    return app
}