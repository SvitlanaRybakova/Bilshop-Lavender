import React, { createContext, useState, useEffect } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;

  //variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(2);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // * main array from db
  const [cars] = useState([...carsarray]);

  // * copy of the main array that changes and modifieds
  const [copyCars, setCopyCars] = useState(cars);

  //  *array that is rendered on the CarList
  const [currentCars, setCurrentCars] = useState(copyCars.slice(indexOfFirstCar, indexOfLastCar))

  // variables for search bar
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setSearching] = useState(false);
  const [isFinded, setFinded] = useState(true);


  // TODO avoid globals, use local instead - result
  // const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setCurrentCars(copyCars.slice(indexOfFirstCar, indexOfLastCar))
  }, [currentPage, isSearching])



  // show price in friendly set
  const showPrice = (carItem) => {
    const price = String(carItem);
    return price.split(/(\d{3})/).join(' ').trim();
  }

  // functions for search bar
  const findCar = (e) => {
    e.preventDefault();
    setSearching(false)
    setCopyCars(cars)

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
        setFinded(false)
      }

    }

    setSearchInput("");
  };


  return (
    <CarContext.Provider value={{ cars, copyCars, carsPerPage, setCurrentPage, currentCars, findCar, showPrice, setSearchInput, searchInput, isFinded }}>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
