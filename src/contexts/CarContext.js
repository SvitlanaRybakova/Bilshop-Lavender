import { createContext, useState, useEffect } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;
  // main array from db
  const [cars, setCars] = useState([...carsarray]);

  // copy of main array
  const [copyCars, setCopyCars] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(9);
 
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = copyCars.slice(indexOfFirstCar, indexOfLastCar);
  const [isPaginate, setPaginate] = useState(true);



  useEffect(() => {
    console.log('in use effect');
    setCopyCars(cars);
    console.log(copyCars);
    console.log('currentCars', currentCars);
  }, [isPaginate])

  
  return (
    <CarContext.Provider value={{ cars, currentPage, carsPerPage, setCurrentPage, indexOfLastCar,indexOfFirstCar, currentCars }}>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
