function carregaDados() {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {full_width: true});
      });
    
    fetch('http://127.0.0.1:3000/api/produtos')
        .then(res => res.json())
        .then(data => {
            let output = "";
            data.forEach(function(data){
                output += `
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${data.url_img}" class="responsive-img">
                        </div>
                        <div class="card-content" style="text-align : center;">
                          <h4 class="center"> Preço ${data.preco_unit}</h4> 
                          <button class="btn blue darken-4 z-depth-4" style="text-align : center;"> Adicionar ao carrinho</button>
                        </div>
                          
                 </div>          
                 </div>
                `;
            })
            document.getElementById("listaProdutos").innerHTML = output;
        })
        
}
