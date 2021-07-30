import { DataManager } from './data.js';
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
console.log('la clase en detail', manager);

const templatePosterDetail = id => {

    return `
  <article>
  <div>
  <picture>
        <img src= "${id.img}" alt= "${id.name}" class= "imgfilm">
  </picture>
    </div>
    <div> 
        <p> ${id.name}</p>
        <p> ${id.age}</p>
        <p> ${id.gender}</p>
        <p> ${id.eye_color}</p>
        <p>${id.hair_color}</p>
        <p>${id.specie}</p>
    </div>
  </article>
        `;
}

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
    let outputPoster = [];
    const div = document.createElement('div');
    div.innerHTML = outputPoster;
    gridDetail.appendChild(div);

    selectCharacters.addEventListener('change', event => {
        console.log('hola');
        let optionCharacters = selectCharacters.value;
        console.log('option personajes', optionCharacters);
        let filterCharacters = manager.filterByCharacter(optionCharacters);
        let listByCharacters = '';
        filterCharacters.forEach((item) => listByCharacters += templatePosterDetail(item));
        div.innerHTML = listByCharacters;
    });



}

start();