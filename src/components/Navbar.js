import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'


const Navbar = () =>{
  return(
    <div>
        <h1>Logo <FontAwesomeIcon icon={faCar}/></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/shopping-cart'><FontAwesomeIcon icon={faShoppingCart}/></Link>
      </nav>
    </div>
  );
}

export default Navbar;