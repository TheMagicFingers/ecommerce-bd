const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')
const seedDB = require('../db/seed')

module.exports = () => {

    let app = express()
    
    //Usar apenas 1 vez quando for criado o servidor para poder adicionar elementos ao banco de dados
    //seedDB()

    app.use(bodyParser.urlencoded({urlencoded: true}))
    app.use(bodyParser.json())
    app.set('json spaces', 4)
    
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
        next()
    })
    
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app)

    return app
}