import React, { useEffect, useState } from "React";
import { useLoaderData } from "react-router-dom";

import CarouselComponent from "./../components/CarouselComponent.jsx"

import "./Needs.css";

function Needs() {  
  const { id } = useLoaderData();

  const [carouselData, setCarouselData] = useState([]);
  const [objective, setObjective] = useState("");

  useEffect(()=> {
    fetch("http://localhost:4242/db")
    .then(res => res.json())
    .then(data => {
      setCarouselData(data[id].instructions);
      setObjective(data[id].objective);
    })
  }, []);

  return (
    <section id="needs">
      <CarouselComponent carouselData={carouselData} objective={objective} />
      {/* <div id="dots">
        <div className="dot"></div>
        <div className="dot selected"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div> */}
    </section>
  );
}

export default Needs;
