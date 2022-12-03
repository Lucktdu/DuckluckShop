let carrinho = [];

function attcarrinho() {
  let divcarrinho = document.getElementById("carrinho");
}

async function shoplucao() {
  let resultado = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=Iphone14"
  );
  let boalucao = await resultado.json();

  let resul = boalucao.results;
  let res = resul;

  for (i = 0; i < res.length; i++) {
    // Titulo Produtos
    let divprodutos = document.getElementById("produtos");
    let titulo = document.createElement("div");
    titulo.className = "produto";
    titulo.innerHTML = res[i].title;

    // Valor dos produtos
    let valor = document.createElement("div");
    valor.className = "valor";
    valor.innerHTML = res[i].price;

    // imagem produtos
    let imagem = document.createElement("img");
    imagem.src = res[i].thumbnail;
    imagem.className = "Imgphone";
    let divimagem = document.createElement("div");
    divimagem.append(imagem);
    document.getElementsByClassName("produto").innerHTML = imagem[i];

    // Botão Carrinho ---------
    let botao = document.createElement("input");
    botao.type = "button";
    botao.value = "Envia ao carrinho";
    botao.className = "btc";
    botao.id = res[i].id;

    // console.log('produtos');
    divprodutos.appendChild(titulo);
    divprodutos.appendChild(valor);
    divprodutos.appendChild(imagem);
    divprodutos.appendChild(botao);

    let divbtc = document.getElementsByClassName("btc");
    divbtc[i].addEventListener("click", function () {
      var btcid = botao.getAttribute("id");
      for (c = 0; c < res.length; c++) {
        if (res[c].id === btcid) {
          // console.log(res[c])
          //Adicionar o produto a um array.
          carrinho.push(res[c]);
          console.log(carrinho);
          // Chamar uma função que adiciona ao carrinho.
        }
      }

      //  res[btcid].filter(res.title)
      //  document.getElementsByClassName('carrinho').innerHTML =
    });
  }
}

shoplucao();
