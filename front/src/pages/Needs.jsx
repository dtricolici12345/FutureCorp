import { useEffect, useState } from "react";

import Carousel from "./../components/CarouselComponent.jsx"

import Logo from "./../assets/Logo.png"

import "./Needs.css";

function Needs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("")
    .then(res => res.json)
    .then(data => setData(data))
  }, [])

  return (
    <section id="needs">
      <img src={Logo} alt="Logo" />
      <h1>J'ai soif !</h1>
      <Carousel data={data}/>
      <div id="dots">
        <div className="dot"></div>
        <div className="dot selected"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}

export default Needs;
