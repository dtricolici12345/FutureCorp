import image1 from "../assets/nourriture.png";
import image2 from "../assets/boisson.png";
import image3 from "../assets/feu.png";
import image4 from "../assets/repos.png";
import ButtonNav from "../components/ButtonNav";


function Home() {
  return (
    <div className="home-page">
    <div className="icon-container">
      <ButtonNav linkURL="/Needs/0" imgSrc={image1} altImg="nourriture"/>
      <ButtonNav linkURL="/Needs/1" imgSrc={image2} altImg="boisson"/>
      <ButtonNav linkURL="/Needs/2" imgSrc={image3} altImg="rechauffage"/>
      <ButtonNav linkURL="/Needs/3" imgSrc={image4} altImg="repo"/>
      
    </div>
  </div>
  );
}

export default Home;



