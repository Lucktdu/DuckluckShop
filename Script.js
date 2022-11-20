
async function shoplucao () {
    resultado = await fetch(
      "https://api.mercadolibre.com/sites/MLB/search?q=Iphone14"
    ); 



 boalucao = await resultado.json()

for( i = 0; i <= boalucao.results.length; i++){
    
    console.log(boalucao.results[i].title)


titulo = document.createElement('h1')
pegarbody = document.getElementById('gato')
titulo.innerText = boalucao.results[i].title
console.log(titulo)
pegarbody.appendChild(titulo)
}

 



}
shoplucao()