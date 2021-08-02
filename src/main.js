/* eslint-disable no-unused-vars */
import { DataManager } from './data.js';
import { templatePoster } from './template-poster.js';
import data from '/data/ghibli/ghibli.js';
//console.log('data js que trae', data);
let films = data.films[2];
//console.log('que me trae data js en posicion2', films);

//new se usa para indicarle al navegador que queremos crear una nueva instancia del objeto.
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
//console.log('DataManager instanciado', manager);

const createOpcion = (value, text) => {
        const option = document.createElement('option');
        option.value = value;
        option.text = text;
        return option;
    }
    //constantes del DOM
const selectProducer = document.querySelector('#selectProducer');
const gridMovies = document.querySelector('#gridMovies');
const start = async() => {
    await manager.load();
    //Mostrando los poster
    let outputPoster = [];
    const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
    manager.films.forEach((items) => outputPoster += templatePoster(items)); //forEach recorre los elementos del arreglo films.
    div.innerHTML = outputPoster;
    div.classList.add('films__container')
    gridMovies.appendChild(div); //el metodo appendChild inserta un nuevo nodo dentro de la estructura DOM.
    //Llenando el select de producer 
    // manager.years.forEach(item => orderDate.add(createOpcion(item, item)));
    manager.producer.forEach(item => selectProducer.add(createOpcion(item, item)));
    selectProducer.addEventListener('change', () => {
        let optionProducer = selectProducer.value;
        let filterProducer = manager.filterByProducer(optionProducer);
        let listByProducer = '';
        filterProducer.forEach((item) => listByProducer += templatePoster(item));
        div.innerHTML = listByProducer;
    });
    const mySelects = (select) => {
        select.addEventListener('change', () => {
            let field = select.dataset.field;
            let option = select.value;
            let data = manager.sortData(option, field);

            let listByOrder = '';
            data.forEach((item) => listByOrder += templatePoster(item));
            div.innerHTML = listByOrder;
        })
    }; // esto se ejecuta por cada select.
    document.querySelectorAll(`[data-field]`).forEach(mySelects);

    //Restaurando los valores con el metodo HTMLFormElement.reset
    const restore = () => document.getElementById('myForm').reset;

    //parte movil
    const btnFilter = document.querySelector('.btn--filter');
    const btnTimes = document.querySelector('.btn--times');
    const toggleForm = event => {
        event.preventDefault();
        const form = document.querySelector('#myForm');
        form.classList.toggle('form--showed');
    };
    btnFilter.addEventListener('click', toggleForm);
    btnTimes.addEventListener('click', toggleForm);

}
start();