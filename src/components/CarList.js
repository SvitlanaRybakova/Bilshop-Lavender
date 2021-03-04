import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import CarItem from "../components/CarItem";

export default function CarList() {
  const { cars, filtered, showResult } = useContext(CarContext);

  if (showResult === true) {
    return (
      <div className="container container-wide">
        <div className="row mtn-30 d-flex justify-content-center">
          {filtered.map((item) => (
            <CarItem key={item.vin} car={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container container-wide">
        <div className="row mtn-30 d-flex justify-content-center">
          {cars.map((item) => (
            <CarItem key={item.vin} car={item} />
          ))}
        </div>
      </div>
    );
  }
}
