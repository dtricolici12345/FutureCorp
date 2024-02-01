import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/Needs/0" >
        Eau
      </Link>
      <Link to="/Needs/1" >
        Nourriture
      </Link>
      <Link to="/Needs/2" >
        Chasse
      </Link>
      <Link to="/Needs/3" >
        S'abriter
      </Link>
    </>
  );
}

export default Home;
