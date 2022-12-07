let cartList = [];
let productsList = [];
function attcarrinho() {
  let divcarrinho = document.getElementById("carrinho");
  divcarrinho.innerHTML = window.onload = () => {
    createHome();
  };
}

async function fetchByQuery(query = "Iphone14") {
  let result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );
  return (await result.json()).results;

  function createProductElement(className) {
    const ProductElement = document.createElement("div");
    ProductElement.className = `${className}product `;
    return ProductElement;
  }

  function createTitle(text, className) {
    const titleElement = document.createElement("div");
    titleElement.className = `${className}title`;
    titleElement.innerText = text;
    return titleElement;
  }

  function createValue(value, className) {
    const valueElement = document.createElement("div");
    valueElement.className = `${className} valor`;
    valueElement.innerText = value;
    return valueElement;
  }

  function createImage(thumbnail, className) {
    const imageElemente = document.createElement("img");
    imageElemente.src = thumbnail;
    imageElemente.className = `${className}Imgphone`;

    const imageDiv = document.createElement("div");
    imageDiv.appendChild(imageElemente);
    return imageDiv;
  }

  function createButton(id, className) {
    const button = document.createElement("input");
    button.type = "button";
    button.value = "Enviar ao carrinho";
    button.id = id;
    button.className = `${className}btc`;
    button.addEventListener("click", buttonCartClickHandler);
    return button;
  }

  function buttonCartClickHandler(event) {
    event.preventDefault()
    for ( c = 0;  c < productsList.length; c++) {

      if( productsList[c].id === event.target.id){
        cartList.push(productsList[c])
        break
      }
    }




  }

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
