let cartList = [];
let productsList = [];

window.onload = () => {
  createHome();
};

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
    const imageElement = document.createElement("img");
    imageElement.src = thumbnail;
    imageElement.className = `${className}Imgphone`;

    const imageDiv = document.createElement("div");
    imageDiv.appendChild(imageElement);
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
    event.preventDefault();
    for (c = 0; c < productsList.length; c++) {
      if (productsList[c].id === event.target.id) {
        cartList.push(productsList[c]);
        break;
      }
    }

    addItemToCar();
  }
}
function createProductElement(
  productsList,
  fatherElement,
  classinitial = "home"
) {
  for (i = 0; i < productsList.length; i++) {
    const productElement = createProductElement(classinitial);
    const titleElement = createTitle(productsList[i].title, classinitial);
    const valueElement = createVKalue(productsList[i].price, classinitial);
    const imageDiv = createImage(productsList[i].thumbnail, classinitial);
    const cartButton = createCartButton(productsList[i].id, classinitial);

    productElement.appendChild(titleElement);
    productElement.appendChild(valueElement);
    productElement.appendChild(imageDiv);
    productElement.appendChild(cartButton);
    fatherElement.appendChild(productElement);
  }
}
async function createHome() {
  const productElement = document.getElementById("produtos");
  const products = await fetchByQuery();
  productsList = products;
  createProductElement(products, productElement);
}

function addItemToCar() {
  const cartElement = document.getElementById("carrinho");
  cartElement.innerText = "";

  createProductElement(cartList, cartElement, "cart");
}
