export const templatePosterDetail = id => {

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