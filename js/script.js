function carregaDados(event) {
    
    fetch('http://127.0.0.1:3000/api/produtos')
        .then(res => res.json())
        .then(json => mostraDados(json))
        .catch(err => 
            console.log(err))
}

/*
    Função para criar um div para cadas produto
    modelo:
    <div class="col s12 m4">
        <div class="thumbnail">
            <img src="url" class="responsive-img" alt="">
            <p class="center">Prod1</p>   
        </div>          
    </div>
*/
function mostraDados(produtos) {
    // para cada produto chama
    // a função de criar uma dia
    // para ele
    produtos.forEach((produto, index) => {
        montaDiv(produto)
    });

    let produto = produtos[0]
    console.log(produto)   
}

function montaDiv(produto) {
    // pega a div class='row'
    let rowListaProdutos = document.querySelector('#listaProdutos')
    
    // cria a div class='col s12 m4'
    let div = document.createElement('div')
    div.classList.add('col')
    div.classList.add('s12')
    div.classList.add('m4')
    
    // cria a div class='thumbnail'
    let div2 = document.createElement('div')
    div2.classList.add('thumbnail')

    // cria img
    let img = document.createElement('img')
    img.src = produto.url_img
    img.alt = ""
    img.classList.add('responsive-img')

    // definir nome do produto
    let text = document.createTextNode(produto.descricao)

    div.appendChild(div2)
    div2.appendChild(img)
    div2.appendChild(text)
    rowListaProdutos.appendChild(div)
}