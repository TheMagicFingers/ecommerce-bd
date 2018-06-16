const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      fetch = require('node-fetch')

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

//Index route - página inicial (Mostra todos os produtos)
app.get('/', (req,res) =>{
    res.redirect("/produtos")
})
// Index route - mostra todos os produtos
app.get('/produtos', (req,res) =>{
    fetch('http://127.0.0.1:3000/api/produtos')
        .then(res => res.json())
        .then(data => {
            res.render('index',{data: data})
        })
})
//Show route
app.get('/produtos/:id', (req,res) =>{
    //Buscar na fetch api informações sobre um único produto
    res.render('produto', {
        data: data
    })
})

app.get('/login', (req,res) => {
    res.render('login');
})

app.listen(9000, function(){
    console.log("running...");
});