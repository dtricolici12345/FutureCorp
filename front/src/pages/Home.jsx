import image3 from "../assets/rechauffer.png"
import ButtonNav from "../components/ButtonNav";




function Home() {
  return (
    <div className="home-page">
    <div className="icon-container">
      <ButtonNav linkURL="/nourriture" imgSrc={image3} altImg="nourriture"/>
      <ButtonNav linkURL="/boisson" imgSrc={image3} altImg="boisson"/>
      <ButtonNav linkURL="/rechauffage" imgSrc={image3} altImg="rechauffage"/>
      <ButtonNav linkURL="/repo" imgSrc={image3} altImg="repo"/>
      
    </div>
  </div>
  )
}

export default Home;



