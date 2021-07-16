import { getData } from './data.js';
//getData();
const templatePoster = (data) => {
    return `
    <picture>
    <img src= "${data.poster}" alt= "${data.title}" class= "imgfilm">
    </picture>
  `;
}
const start = async() => {
    let data = await getData();
    let output = [];
    const gridMovies = document.querySelector('#gridMovies');
    const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
    data.films.forEach((items) => output += templatePoster(items)); //forEach recorre los elementos del arreglo films.
    div.innerHTML = output;
    gridMovies.appendChild(div); //el metodo appendChild inserta un nuevo nodo dentro de la estructura DOM.
};
start();