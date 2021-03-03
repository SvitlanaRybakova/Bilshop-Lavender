import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/Home.Module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CarItem(props) {
  const { car } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/cars/${car.vin}`);
  };

  return (
    <div className={`${styles.itemWrapper} card col-md-3`}>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgCars}
          src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
        ></img>
      </div>
      <h6>{car.make}</h6>
      <h6>{car.model}</h6>
      <h6>{car.year}</h6>
      <Link className={styles.carItemCart} to="/shopping-cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <div onClick={handleClick} className={`${styles.detailsButton} btn`}>
        view details
      </div>
    </div>
  );
}
