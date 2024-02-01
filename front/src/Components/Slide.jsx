import img from "./Rectangle13.png";

import "./Slide.css";

function Slide() {
  return (
    <section id="slide">
      <aside className="img-container">
        <img src={img} alt="slide" />
      </aside>
      <article className="info-container">
        <h2>OBJECTIF : TROUVER DE L'EAU</h2>
        <h3>1. Recherche de source d'eau</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium laboriosam ab. Vel rerum nam debitis vitae dolorem, fugit nesciunt officia at laborum nemo assumenda ducimus cupiditate illo quam natus.</p>
      </article>
    </section>
  );
}

export default Slide;
