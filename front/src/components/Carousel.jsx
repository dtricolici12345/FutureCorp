import img from "./Rectangle13.png";

import "./Carousel.css";

function Carousel() {
  return (
    <section id="carousel">
      <img src={img} alt="slide" />
      <h3><span>1</span>Recherche de source d'eau</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium laboriosam ab. Vel rerum nam debitis vitae dolorem, fugit nesciunt officia at laborum nemo assumenda ducimus cupiditate illo quam natus.</p>
    </section>
  );
}

export default Carousel;