import { moreInformation } from './moreinformation.js';
console.log('llegando moreInformation a template', moreInformation);
let manager = new moreInformation; /// se instancia todo lo que esta adentro del DataManager, todos los this, aqui podre verlos.
console.log('la clase', manager);
// `http://localhost:5000/slider?id=${manager.id}`;
const URL = `${location.origin}/slider?id=${manager.id}`;
export const templatePoster = manager => {
        return `
  <article class = "flip-card">
    <div class = "flip-card-inner">
      <section class = "flip-card front">
        <picture>
        <img src= "${manager.poster}" alt= "${manager.title}" class= "imgfilm">
        </picture>
      </section>
      <section class = "flip-card-back">
        <h3> ${manager.title} </h3>
        <p> ${manager.description.slice(0, 150)}... <a  href="${URL}">Ver más</a> </p>
      </section>
    </div>
  </article>
        `;
    }
    // //pagina2
    // const moreInformation = getElementById('moreInformation');

// const pageTwo = (posterId) => {
//     select.addEventListener('click', event => {
//         let seeMore = moreInformation.value;

//     })
// }