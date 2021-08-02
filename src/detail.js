/* eslint-disable no-case-declarations */
import { DataManager } from './data.js';
import { templatePosterDetail, templatePosterLocations, templatePosterVehicles, templatePosterPeople } from './template-poster.js'
//new se usa para indicarle al navegador que queremos crear una nueva instancia del objeto
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
console.log('la clase en detail', manager);

const start = async() => {
    await manager.load();
    let queryString = new URLSearchParams(location.search); // https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
    const id = queryString.get('id');
    if (!id) {
        console.log('404');
        return;
    }
    let film = manager.getById(id); //obtengo los datos del objeto que tiene ese id
    console.log('miFilms', film);
    let characters = film.people;
    console.log('probando si entro a propiedad de people', characters);

    //const { title, poster, description } = film;

    const gridDetail = document.getElementById('gridDetail');

    //mostrando poster y descripcion
    let outputPoster = [];
    const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
    outputPoster += templatePosterDetail(film); //forEach recorre los elementos del arreglo films.
    div.innerHTML = outputPoster;
    div.classList.add('films__container');
    gridDetail.appendChild(div);

    const selectMoreOption = document.getElementById('moreInformation');
    selectMoreOption.addEventListener('change', () => {
        let selectOption = selectMoreOption.value;
        switch (selectOption) {
            case 'characters':
                let listByCharacters = "";
                film.people.forEach(element => listByCharacters += templatePosterPeople(element));
                div.innerHTML = listByCharacters;
                break;
            case 'locations':
                let listBylocations = '';
                film.locations.forEach(element => listBylocations += templatePosterLocations(element));
                div.innerHTML = listBylocations;
                if (templatePosterLocations == '') {
                    div.innerHTML = "Contains no elements."
                }
                break;
            case 'vehicles':
                let listByVehicles = '';
                film.vehicles.forEach(element => listByVehicles += templatePosterVehicles(element));
                div.innerHTML = listByVehicles;
                break;
            default:
                if (templatePosterLocations || templatePosterVehicles === '') {
                    div.innerHTML = "Contains no elements."
                }

                break;

        }

    });

}

start();