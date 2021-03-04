import { createContext, useState, useEffect } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;

  // main array from db
  const [cars, setCars] = useState([...carsarray]);

  // copy of main array
  const [copyCars, setCopyCars] = useState(cars);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(8);
 
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = copyCars.slice(indexOfFirstCar, indexOfLastCar);
  

  useEffect(() => {
    setCars([...carsarray]);
    setCopyCars(cars);
  }, [])

 
  
  return (
    <CarContext.Provider value={{ cars, copyCars, carsPerPage, setCurrentPage, currentCars }}>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
