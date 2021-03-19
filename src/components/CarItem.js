import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CarContext } from "../contexts/CarContext";
import { ShopCartContext } from "../contexts/ShopCartContext";
import styles from "../styles/Home.Module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CarItem(props) {
  const { car } = props;
  const { showPrice } = useContext(CarContext);

  const { addCarToCart } = useContext(ShopCartContext);
  const history = useHistory();

  const handleClick = () => {
    history.push(`/cars/${car.vin}`);
  };

  return (
    <div className={`${styles.itemWrapper} card col-md-5 col-lg-3`}>
      <div className={styles.imgContainer}>
        <img
          onClick={handleClick}
          className={styles.imgCars}
          src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
        ></img>
      </div>
      <div
        className="d-flex flex-column justify-content-between px-4"
        style={{ height: "11.25rem" }}
      >
        {/* name */}
        <div className="row">
          <h6 className="col-9 col-md-8 col-xl-9">
            {car.make} {car.model}
          </h6>
          <span className="col-3 col-md-4 col-xl-3 mt-1 text-md-end">
            {car.year}
          </span>
          {/*miles*/}
          <span className={`${styles.milesSpan} `}>
          <strong>{showPrice(car.miles)} km </strong>
          </span>
        </div>
        {/* price */}
        <span className={`${styles.priseSpan} `}>
          <strong>{showPrice(car.price)} SEK</strong>
        </span>
        {/* buttons */}
        <div className="row d-flex justify-content-between">
          <div
            className={`${styles.carItemCart} col-2 `}
            onClick={() => addCarToCart(car)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div
            onClick={handleClick}
            className={`${styles.detailsButton} col-6  btn`}
          >
            view details
          </div>
        </div>
      </div>
    </div>
  );
}
