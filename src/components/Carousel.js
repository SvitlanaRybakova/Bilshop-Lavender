import styles from "../styles/Carousel.Module.css";
import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import CarouselCar from "../components/CarouselCar";
import CarouselIndicators from "../components/CarouselIndicators";

function Carousel() {
  const { cars } = useContext(CarContext);
  const filteredCars = [];
  cars.forEach(car => {
    if(car.hasOwnProperty('discount')){
      filteredCars.push(car);
    }
  });

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-light slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
      {filteredCars.map((car, index) => (
          <CarouselIndicators key={car.vin} car={car} index={index}/>
        ))}
      </div>

      <div className={`${styles.carouselContainer} carousel-inner`}>
      {filteredCars.map((car, index) => (
          <CarouselCar key={car.vin} car={car} index={index}/>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;