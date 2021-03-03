import { createContext, useState } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;

  const [cars, setCars] = useState([...carsarray]);

  return (
    <CarContext.Provider value={{ cars }}>{props.children}</CarContext.Provider>
  );
}

export default CarContextProvider;
