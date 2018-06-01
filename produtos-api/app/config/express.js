const express = require('express')
const load = require('express-load')
const router = express.Router()
const bodyParser = require('body-parser')


module.exports = () => {

    let app = express()

    app.use(bodyParser.urlencoded({urlencoded: true}))
    app.use(bodyParser.json())

    // All routes prefixed with /api
    app.use('/api', router)

    router.use((req, res, next) => {
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