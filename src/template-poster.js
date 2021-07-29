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