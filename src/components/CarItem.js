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
    
    <div className={`${styles.itemWrapper} card col-md-5 col-lg-3`}>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgCars}
          src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
        ></img>
      </div>
      <div className="row">
        <h6 className="col-9">
          {car.make} {car.model}
        </h6>
        <span className="col-3 mt-1 text-md-end">{car.year}</span>
      </div>
      <span className="col-5 mt-2 text-md-start">{car.price} SEK</span>
      <div className="row mt-4">
        <Link className={`${styles.carItemCart} col`} to="/shopping-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <div
          onClick={handleClick}
          className={`${styles.detailsButton} col btn`}
        >
          view details
        </div>
      </div>
    </div>
  );
}