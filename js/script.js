function carregaDados(event) {
    
    fetch('http://127.0.0.1:3000/api/produtos')
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => 
            console.log(err))
}