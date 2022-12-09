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
}
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
function createProductElements(
  productList,
  fatherElement,
  classInitial = "home"
) {
  for (i = 0; i < productList.length; i++) {
    const productElement = createProductElements(classInitial);
    const titleElement = createTitle(productList[i].title, classInitial);
    const valueElement = createValue(productList[i].price, classInitial);
    const imageDiv = createImage(productList[i].thumbnail, classInitial);
    const cartButton = createCartButton(productList[i].id, classInitial);

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
  createProductElements(products, productElement);
}

function addItemToCar() {
  const cartElement = document.getElementById("carrinho");
  cartElement.innerText = "";

  createProductElements(cartList, cartElement, "cart");
}
