import React, { createContext, useState, useEffect } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;

  // * main array from db
  const [cars, setCars] = useState([...carsarray]);


  // * copy of main array 
  const [copyCars, setCopyCars] = useState(cars);


  //variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(2);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;


  //  *array that is rendered on the CarList
  const [currentCars, setCurrentCars] = useState(copyCars.slice(indexOfFirstCar, indexOfLastCar))
  //  получаю инфу из базы


  useEffect(() => {
    setCurrentCars(copyCars.slice(indexOfFirstCar, indexOfLastCar))
  }, [currentPage])

  // variables for search bar
  const [searchInput, setSearchInput] = useState("");
  const [isSearhing, setSearching] = useState(false);
  // const [filtered, setFiltered] = useState([]);


  useEffect(() => {
    setCurrentCars(copyCars.slice(indexOfFirstCar, indexOfLastCar))
  }, [isSearhing])

  // show price in friendly set
  const showPrice = (carItem) => {
    const price = String(carItem);
    return price.split(/(\d{3})/).join(' ').trim();
  }

  // functions for search bar

  const findCar = (e) => {
    e.preventDefault();
    console.log(searchInput);
    let result = [];
    if (searchInput.length > 0) {
      
      result = copyCars.filter((item) => {
        return (
          item.make.toLowerCase().includes(searchInput.toLowerCase()) +
          item.model.toLowerCase().includes(searchInput.toLowerCase())
        );
      })

      if (result.length > 0) {
        setCopyCars(result)
        setSearching(true)
      } else {
        console.log('not found');
      }
      console.log(currentCars);
    } else {
      setCopyCars(cars)
      setSearching(true)
      console.log(currentCars);
    }
    setSearchInput("");
  };


  return (
    <CarContext.Provider value={{ cars, copyCars, carsPerPage, setCurrentPage, currentCars, findCar, showPrice, setSearchInput }}>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
