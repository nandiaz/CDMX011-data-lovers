export const templatePoster = manager => {
    return `
  <div class = "flip-card">
    <div class = "flip-card-inner">
      <div class = "flip-card front">
        <picture>
        <img src= "${manager.poster}" alt= "${manager.title}" class= "imgfilm">
        </picture>
      </div>
      <div class = "flip-card-back">
        <h1> ${manager.title} </h1>
        <p> ${manager.description} </p>
      </div>
    </div>
  </div>
        `;
}