import { NavLink } from "react-router-dom";
import logoImage from '../assets/Logo.png';


function Logo(){
    return (
        <div className="logo">
        <NavLink
          to="/"
          className="Home">
          <img src={logoImage} alt="Logo" />
         
        </NavLink>
      </div>
    );
  }
  
  export default Logo;