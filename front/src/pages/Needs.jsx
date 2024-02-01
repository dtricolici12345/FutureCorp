import Logo from "./../assets/Logo.png"

import "./Needs.css";

function Needs() {
  return (
    <section id="needs">
      <img src={Logo} alt="Logo" />
      <h1>J'ai soif !</h1>
      {/* <Carousel /> */}
      <div id="carousel"></div>
      <div id="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}

export default Needs;
