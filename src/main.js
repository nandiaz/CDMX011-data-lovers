import { getData } from './data.js';

const templatePoster = (data) => {
    return `<picture>
    <img src= "${data.poster}" alt= "${data.title}" class= "imgfilm">
    </picture>`;
}
const start = async() => {
    let data = await getData();
    let outputPoster = [];
    const gridMovies = document.querySelector('#gridMovies');
    const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
    data.films.forEach((items) => outputPoster += templatePoster(items)); //forEach recorre los elementos del arreglo films.
    div.innerHTML = outputPoster;
    gridMovies.appendChild(div); //el metodo appendChild inserta un nuevo nodo dentro de la estructura DOM.

    //extrayendo años y productores

    const { films } = data;

    let years = films.map((item) => item.release_date).filter((item) => ![undefined].includes(item));
    years = [...new Set(years)];
    console.log('los años ', years);
    let producer = films.map((item) => item.producer).filter((item) => ![undefined].includes(item));
    producer = [...new Set(producer)];
    console.log('los productores ', producer);
    let score = films.map((item) => item.score).filter((item) => ![undefined].includes(item));
    producer = [...new Set(producer)];
    console.log('los productores ', producer);

    const createOpcion = (value, text) => {
        const option = document.createElement('option');
        option.value = value;
        option.text = text;
        return option
    }
    const select = document.querySelector('#orderDate');
    const selectProducer = document.querySelector('#selectProducer');
    years.forEach(item => select.add(createOpcion(item, item)));
    producer.forEach(item => selectProducer.add(createOpcion(item, item)));
};
start();