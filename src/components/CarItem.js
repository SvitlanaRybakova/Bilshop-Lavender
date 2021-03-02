import React from 'react';
import styles from "../styles/Home.Module.css";

export default function CarItem(props){
  const { car } = props;
  
  return(
    <div className="card col-md-3">
      <h6>{ car.make }</h6>
      <div className={styles.imgContainer}>
        <img className={styles.imgCars} src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}></img>
      </div>
    </div>
  )
}