import { Link } from "react-router-dom";


function ButtonNav ({linkURL, imgSrc, altImg}) {
    
    return (
        <Link to={linkURL}>
        <img src={imgSrc} alt={altImg} />
      </Link>
    )
}
 export default ButtonNav;
 