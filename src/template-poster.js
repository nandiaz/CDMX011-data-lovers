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
        <p> ${manager.description.slice(0, 150)}... <a id= "moreInformation" href="slider.html">Ver más</a> </p>
      </section>
    </div>
  </article>
        `;
}