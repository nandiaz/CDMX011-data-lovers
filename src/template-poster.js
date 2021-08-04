// `http://localhost:5000/slider?id=${poster.id}`;

export const templatePoster = poster => {
    const URL = `${location.origin}/detail?id=${poster.id}`;
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
        <p> ${poster.description.slice(0, 150)}... <a  href="${URL}">Ver más</a> </p>
      </section>
    </div>
  </article>
        `;
}

export const templatePosterDetail = id => {
    return `
<div class='some-page-wrapper'>
    <div class='row'>
        <div class='column'>
            <div class='blue-column'>
                <h3 class="title-detail">${id.title}</h3>
                <p>${id.description}</p>
            </div>
        </div>
        <div class='column'>
            <div class='green-column'>
                <picture>
                    <img src="${id.poster}" alt="${id.title}" class="imgDetail">
                </picture>
             
            </div>
       
        </div>
    </div>
</div>
      `;
}
export const templatePosterPeople = id => {
    return `
<div class='some-page-wrapper'>
  <div class='row'>
      <div class='column'>
          <div class='blue-column'>
              <p>Name: ${id.name}</p>
              <p>Gender: ${id.gender}</p>
              <p>Age: ${id.age}</p>
              <p>Eye color: ${id.eye_color}</p>
              <p>hair_color: ${id.hair_color}</p>
              <p>Specie: ${id.specie}</p>
          </div>
      </div>
      <div class='column'>
          <div class='green-column'>
              <picture>
                  <img src="${id.img}" alt="${id.name}" class="imgDeta-option">
              </picture>
          </div>    
      </div>
  </div>
</div>
    `;
}
export const templatePosterLocations = id => {
    return `
    <div class='some-page-wrapper'>
    <div class='row'>
        <div class='column'>
            <div class='blue-column'>
                <p>Name: ${id.name}</p>
                <p>Climate: ${id.climate}</p>
                <p>Terrain: ${id.terrain}</p>
                <p>Surface Water: ${id.surface_water}</p>
            </div>
        </div>
        <div class='column'>
            <div class='green-column'>
                <picture>
                    <img src="${id.img}" alt="${id.name}" class="imgDeta-option">
                </picture>
            </div>    
        </div>
    </div>
  </div>
  `;
}
export const templatePosterVehicles = id => {
    return `
    <div class='some-page-wrapper'>
    <div class='row'>
        <div class='column'>
            <div class='blue-column'>
                <p>Name: ${id.name}</p>
                <p>Description: ${id.description}</p>
                <p>Vehicle Class: ${id.vehicle_class}</p>
                <p>Length: ${id.length}</p>
            </div>
        </div>
        <div class='column'>
            <div class='green-column'>
                <picture>
                    <img src="${id.img}" alt="${id.name}" class="imgDeta-option">
                </picture>
            </div>    
        </div>
    </div>
  </div>
  `;
}