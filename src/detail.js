import { DataManager } from './data.js';
import { templatePosterDetail } from './template-poster-detail'
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
console.log('la clase en detail', manager);

const start = async() => {
    await manager.load();
    let queryString = new URLSearchParams(location.search); // https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
    const id = queryString.get("id");
    if (!id) {
        console.log('404');
        return;
    }
    let film = manager.getById(id); //obtengo los datos del objeto que tiene ese id
    console.log(1, film);

    const selectCharacters = document.getElementById('characters');
    //const selectLocations = document.querySelector('#locations');
    //const selectVehicles = document.querySelector('#vehicles');
    const gridDetail = document.getElementById('gridDetail');
    //mostrando poster y descripcion
    let outputPoster = [];
    const div = document.createElement('div');
    div.innerHTML = outputPoster;
    gridDetail.appendChild(div);

    selectCharacters.addEventListener('change', event => {
        console.log('hola', selectCharacters);
        let optionCharacters = selectCharacters.value;
        console.log('option personajes', optionCharacters);
        let filterCharacters = manager.filterByCharacter(optionCharacters);
        let listByCharacters = '';
        filterCharacters.forEach((item) => listByCharacters += templatePosterDetail(item));
        div.innerHTML = listByCharacters;
    });



}

start();

// let outputPoster = [];
// const div = document.createElement('div'); //createElement() crea un elemento HTML especificado por su tagName.
// manager.films.forEach((items) => outputPoster += templatePoster(items)); //forEach recorre los elementos del arreglo films.
// div.innerHTML = outputPoster;
// div.classList.add('films__container')
// gridMovies.appendChild(div);