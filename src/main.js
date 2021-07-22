import { DataManager, } from './data.js';
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
console.log('la clase', manager);
console.log('que trae producer', manager.filterByProducer('Hayao Miyazaki'))
console.log('que trae años', manager.filterByProducer(1988))
const templatePoster = (manager) => {
    return `<picture>
    <img src= "${manager.poster}" alt= "${manager.title}" class= "imgfilm">
    </picture>`;
}
const createOpcion = (value, text) => {
    const option = document.createElement('option');
    option.value = value;
    option.text = text;
    return option;
}
const start = async() => {
    await manager.load();
    console.log('el manager', manager);
    //Mostrando los poster
    let outputPoster = [];
    const gridMovies = document.querySelector('#gridMovies');
    const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
    manager.films.forEach((items) => outputPoster += templatePoster(items)); //forEach recorre los elementos del arreglo films.
    div.innerHTML = outputPoster;
    gridMovies.appendChild(div); //el metodo appendChild inserta un nuevo nodo dentro de la estructura DOM.
    //Llenando los select
    const select = document.querySelector('#orderDate');
    const selectProducer = document.querySelector('#selectProducer');
    // manager.years.forEach(item => select.add(createOpcion(item, item)));
    manager.producer.forEach(item => selectProducer.add(createOpcion(item, item)));
    selectProducer.addEventListener('change', () => {
        let optionProducer = selectProducer.value;
        let filterProducer = manager.filterByProducer(optionProducer);
        let listByProducer = '';
        filterProducer.forEach((item) => listByProducer += templatePoster(item));
        div.innerHTML = listByProducer;


    })

    select.addEventListener('change', () => {
        let optionReleaseDate = select.value;
        let orderByReleaseData = manager.sortDataYear();
        const optionsSelect = () => {
            if (optionReleaseDate == 'upward') {
                console.log("años ascendentes", orderByReleaseData);
                let listByReleaseData = '';
                orderByReleaseData.forEach((item) => listByReleaseData += templatePoster(item));
                div.innerHTML = listByReleaseData;
            } else {
                optionReleaseDate == 'falling';
                orderByReleaseData.reverse();
                let listByReleaseData = '';
                orderByReleaseData.forEach((item) => listByReleaseData += templatePoster(item));
                div.innerHTML = listByReleaseData;
            }
        }
    });
}

start();