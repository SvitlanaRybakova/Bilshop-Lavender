import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "../styles/Home.Module.css";

export default function CarItem(props){
  const { car } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/cars/${car.vin}`);
  }
  
  return(
    <div className="card col-md-3">
      <h6>{ car.make }</h6>
      <div className={styles.imgContainer}>
        <img className={styles.imgCars} src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}></img>
      </div>
    <div 
    onClick={handleClick}
    className="btn"
    >See more</div>
    </div>
  )
}