import { DataManager } from './data.js';
import { templatePoster } from './template-poster.js'
let manager = new DataManager; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
console.log('la clase', manager);

const start = async() => {
    await manager.load();
    let queryString = new URLSearchParams(location.search); // https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
    const id = queryString.get("id");
    if (!id) {
        console.log('404');
        return;
    }
    let film = manager.getById(id);
    console.log(1, film);

    const selectCharacters = document.querySelector('#characters');
    const selectLocations = document.querySelector('#locations');
    const selectVehicles = document.querySelector('#vehicles');



}


start();
//"2baf70d1-42bb-4437-b551-e5fed5a87abe"