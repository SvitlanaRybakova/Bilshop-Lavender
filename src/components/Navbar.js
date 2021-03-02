import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Navbar.module.css'


const Navbar = () =>{
  return(
    // <div className='d-flex justify-content-between align-items-center'>
    //   {/* <h1>Logo <FontAwesomeIcon icon={faCar}/></h1> */}
    //   <div className='d-flex align-items-end ms-3'>
    //     <img src={`../logo.png`} alt="Logo" className={styles.logo}/>
    //     <div className={`${styles.brandName} ms-3`}>Car Market <p className={styles.subBrand}>Lavender</p></div>
        
    //   </div>
    //   <nav className='nav'>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <Link to='/shopping-cart'><FontAwesomeIcon icon={faShoppingCart}/></Link>
    //   </nav>
    // </div>

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <div className='d-flex align-items-end ms-3'>
         <img src={`../logo.png`} alt="Logo" className={styles.logo}/>
         <div className={`${styles.brandName} ms-3`}>Car Market <p className={styles.subBrand}>Lavender</p></div>
       </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;