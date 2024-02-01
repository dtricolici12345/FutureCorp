import image1 from "../assets/nourriture.png";
import ButtonNav from "../components/ButtonNav";
import image2 from "../assets/boisson.png";
import image3 from "../assets/feu.png";
import image4 from "../assets/repos.png";


function Home() {
  return (
    <div className="home-page">
    <div className="icon-container">
      <ButtonNav linkURL="/nourriture" imgSrc={image1} altImg="nourriture"/>
      <ButtonNav linkURL="/boisson" imgSrc={image2} altImg="boisson"/>
      <ButtonNav linkURL="/rechauffage" imgSrc={image3} altImg="rechauffage"/>
      <ButtonNav linkURL="/repo" imgSrc={image4} altImg="repo"/>
      
    </div>
  </div>
  )
}

export default Home;



