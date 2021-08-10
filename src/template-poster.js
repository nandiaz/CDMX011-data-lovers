// `http://localhost:5000/slider?id=${poster.id}`;

export const templatePoster = poster => {
  //  const URL = `${location.origin}/detail?id=${poster.id}`;
  const URL = `${location.origin}${location.pathname}detail?id=${poster.id}`;
  return `
<article class = "flip-card">
  <div class = "flip-card-inner">
    <section class = "flip-card front">
      <picture>
      <img src= "${poster.poster}" alt= "${poster.title}" class= "imgfilm">
      </picture>
    </section>
    <section class = "flip-card-back">
      <h3> ${poster.title} </h3>
      <p> ${poster.description.slice(0, 150)}... <a  href="${URL}">See more...</a> </p>
    </section>
  </div>
</article>       `;
}
export const templatePosterDetail = id => {
  return `
  <article class='column__2'>
    <section class='content'>
      <h1 class='title-detail'>${id.title}</h1>
      <p>${id.description}</p>
    </section>  
      <picture >
        <img src="${id.poster}" alt="${id.title}" class="imgDetail">
      </picture> 
  </article>
    `;
}
export const templatePosterPeople = id => {
  return `
  <article class='column item__data column__3'>
      <section class="content">
        <ul class="poster-detail__data">
          <li><h5>Name</h5> <span>${id.name}</span></li>
          <li><h5>Gender</h5> <span> ${id.gender}</span></li>
          <li><h5>Age</h5> <span> ${id.age}</span></li>
          <li><h5>Eye color</h5> <span>color: ${id.eye_color}</span></li>
          <li><h5>Hair color</h5> <span> ${id.hair_color}</span></li>
          <li><h5>Specie</h5> <span> ${id.specie}</span></li>
        </ul>
      </section>
      <picture>
          <img src="${id.img}" alt="${id.name}" class="imgDeta-option">
      </picture>
  </article>
  `;
}
export const templatePosterLocations = id => {
  return `
  <article class='column item__data column__3'>
    <section class="content">
      <ul class="poster-detail__data">
        <li><h5>Name</h5> <span>${id.name}</span></li>
        <li><h5>Climate</h5> <span>${id.climate}</span></li>
        <li><h5>Terrain</h5> <span>${id.terrain}</span></li>
        <li><h5>Surface Water</h5> <span>${id.surface_water}</span></li>     
      </ul>
      </section>
      <picture>
        <img src="${id.img}" alt="${id.name}" class="imgDeta-option">
      </picture>
  </article>
`;
}
export const templatePosterVehicles = id => {
  return `
  <article class='column item__data column__3'>
    <section class="content">
      <ul class="poster-detail__data">
        <li><h5>Name</h5> <span>${id.name}</span></li>
        <li><h5>Description</h5> <span>${id.description}</span></li>
        <li><h5>Vehicle Class</h5> <span>${id.vehicle_class}</span></li>
        <li><h5>Length</h5> <span>${id.length}</span></li>
      </ul>
    </section>
    <picture>
        <img src="${id.img}" alt="${id.name}" class="imgDeta-option">
    </picture>
  </article>
`;
}