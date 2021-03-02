import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Navbar.module.css'


const Navbar = () =>{
  return(
    <div className='d-flex justify-content-between align-items-center'>
      {/* <h1>Logo <FontAwesomeIcon icon={faCar}/></h1> */}
      <div className='d-flex align-items-end ms-3'>
        <img src={`../logo.png`} alt="Logo" className={styles.logo}/>
        <div className={`${styles.brandName} ms-3`}>Car Market <p className={styles.subBrand}>Lavender</p></div>
        
      </div>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/shopping-cart'><FontAwesomeIcon icon={faShoppingCart}/></Link>
      </nav>
    </div>
  );
}

export default Navbar;