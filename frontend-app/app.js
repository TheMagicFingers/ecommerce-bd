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
        .catch(error => console.log(error) )
})
//Show route
app.get('/produtos/:id', (req,res) =>{
    //Buscar na fetch api informações sobre um único produto
    let id = req.params.id;
    fetch('http://127.0.0.1:3000/api/produtos/' + id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            res.render('produto',{produto: data})
        })
        .catch(error => console.log(error) ) 
})

app.get('/login', (req,res) => {
    res.render('login');
})
app.post('/login', (req,res) => {
    console.log(req.body.email + "     " + req.body.password)
    fetch('http://127.0.0.1:3000/api/user/login',
    {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({email:req.body.email, senha:req.body.password})
    })
        .then(res => res.json())
        .then(data => {
            if(data.Login === "Sucesso"){
                res.render('produto',{data: data})
            }
            //console.log(JSON.stringify(data));
        })
        .catch(error => console.log(error))
})

app.get('/cadastrar', (req,res) =>{
    res.render('cadastrar');
})
app.get('/carrinho', (req,res) =>{
    res.render('carrinho');
})



app.listen(9000, function(){
    console.log("running...");
});