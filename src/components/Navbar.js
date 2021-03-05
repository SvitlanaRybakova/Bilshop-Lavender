import { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
  const [showCollapsedMenu, setshowCollapsedMenu] = useState(false)

  const toggleMenu = () => {
    setshowCollapsedMenu(!showCollapsedMenu)
  }

  const show = showCollapsedMenu ? "show" : "";

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container d-flex justify-content-end">
        <div className='d-flex align-items-end flex-grow-1'>
          <Link to="/" className='d-flex align-items-end'>
            <img src={`../../logo.png`} alt="Logo" className='logo'/>
            <div className='brandName ms-3'>Car Market <p className='subBrand'>Lavender</p></div>
          </Link>
          <button>
            onClick={toggleMenu}
            style={{ border: 'none' }}
            className={`${styles.myBtn} btn navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`${show} ${styles.navbarList} collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0 d-flex align-items-end">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link className={styles.shoppingCartIcon} to='/shopping-cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>
    </nav>
  );
}

export default Navbar;