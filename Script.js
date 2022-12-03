



async function shoplucao() {
  let resultado = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=Iphone14"
  );

  let boalucao = await resultado.json();

  for (i = 0; i <= 1; i++) {
  

    let titulo = document.createElement("h1");
    let preco = document.createElement("h2");
    let img = document.createElement("img");
    let botao = document.createElement("input");
    let div = document.createElement("div");
    let quantidade = document.createElement("span");
    let divc =  document.getElementById('carrinho')
    
    // body > section > Div Gato
    pegarbody = document.getElementById("gato");
    pegarcarrinho = document.getElementById("carrinho");
    // Botao do menu de compra
    botao.type = "button";
    botao.value = "Comprar";
    botao.id = boalucao.results[i].id;
    
    // Recebendo informações do array results
    titulo.innerText = boalucao.results[i].title;
    let titulo2 = boalucao.results[i].title;
    preco.innerText = boalucao.results[i].price;
    let preco2 = boalucao.results[i].price;
    
    img.src = boalucao.results[i].thumbnail;
    let img2 = boalucao.results[i].thumbnail;
    quantidade.innerText = boalucao.results[i].sold_quantity;
    let quantidade2 = boalucao.results[i].sold_quantity;

    // Definindo classes para cada propriedade do site
    titulo.className = "txt";
    preco.className = "valor";
    img.className = "foto";
    botao.className = "btcomprar";
    div.className = "produtos";

    // Adicionar Itens no body e div
    div.appendChild(botao);
    div.appendChild(titulo);
    div.appendChild(preco);
    div.appendChild(img);
    div.appendChild(quantidade);

    pegarbody.appendChild(div);


  

 var links = document.getElementById(botao.id);


 links.addEventListener("click", function () {
  let titulo = document.createElement("h1");
  let preco = document.createElement("h2");
  let img = document.createElement("img");
  let quantidade = document.createElement("span");

  

   titulo.innerText = titulo2
   preco.innerText = preco2
   img.src = img2
   quantidade.innerText = quantidade2
  
   


   
   
   divc.appendChild(titulo);
   divc.appendChild(preco);
   divc.appendChild(img);
   divc.appendChild(quantidade);

   pegarbody.appendChild(divc);
 })
}
  








    
   
 
}



shoplucao()
