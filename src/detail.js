/* eslint-disable no-case-declarations */
import { DataManager } from './data.js';
import { templatePosterDetail, templatePosterLocations, templatePosterVehicles, templatePosterPeople } from './template-poster.js'
//new se usa para indicarle al navegador que queremos crear una nueva instancia del objeto
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
//console.log('la clase en detail', manager);
const start = async() => {
    await manager.load();
    let queryString = new URLSearchParams(location.search); // https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
    const id = queryString.get('id'); //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
    if (!id) {
        // console.log('404');
        return;
    }
    let film = manager.getById(id); //obtengo los datos del objeto que tiene ese id pasandole el metodo.getById

    const gridDetail = document.getElementById('gridDetail');
    //mostrando poster y descripcion
    let outputPoster = [];
    const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
    outputPoster += templatePosterDetail(film); //forEach recorre los elementos del arreglo films.
    div.innerHTML = outputPoster;
    div.classList.add('films__details');
    gridDetail.appendChild(div);
    const selectMoreOption = document.getElementById('moreInformation');
    selectMoreOption.addEventListener('change', () => {
        let selectOption = selectMoreOption.value;
        if (selectOption == 'characters') {
            let listByCharacters = "";
            film.people.forEach(element => listByCharacters += templatePosterPeople(element));
            div.innerHTML = listByCharacters;
        }
        if (selectOption == 'locations') {
            let listBylocations = '';
            film.locations.forEach(element => listBylocations += templatePosterLocations(element));
            div.innerHTML = listBylocations;
            if (film.locations == '') {
                div.innerHTML = `<div class= 'grid-detail'>
                                    <img clas= 'img-empty' src='img/ContainsnoElementsEmpty.png'>
                                </div>`;

            }
        }
        if (selectOption == 'vehicles') {
            let listByVehicles = '';
            film.vehicles.forEach(element => listByVehicles += templatePosterVehicles(element));
            div.innerHTML = listByVehicles;
            if (film.vehicles == '') {
                div.innerHTML = `<div class= 'grid-detail'>
                                      <img clas= 'img-empty' src='img/ContainsnoElementsEmpty.png'>
                                 </div>`;
            }
        }
    });
}
start();
