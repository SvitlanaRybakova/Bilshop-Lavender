import { createContext, useState, useEffect } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;

  // main array from db
  const [cars, setCars] = useState([...carsarray]);

  // copy of main array 
  const [copyCars, setCopyCars] = useState(cars);

  //variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(9);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = copyCars.slice(indexOfFirstCar, indexOfLastCar);

  // variables for search bar
  const [searchInput, setSearchInput] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setCars([...carsarray]);
    setCopyCars(cars);
  }, [])

  // functions for search bar
  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const findCar = (e) => {
    e.preventDefault();

    if (searchInput === "") {
      setShowResult(false);
    }

    if (searchInput.length > 0) {
      setFiltered(
        copyCars.filter((item) => {
          return (
            item.make.toLowerCase().includes(searchInput.toLowerCase()) +
            item.model.toLowerCase().includes(searchInput.toLowerCase())
          );
        })
      );
      if (filtered.length > 0) {
        setShowResult(true);
        console.log(filtered);
      } else {
        setShowResult(true);
        console.log(filtered);
      }
    }
    // else {
    //   setCar(copyCar);
    // }

    setSearchInput("");
  };


  return (
    <CarContext.Provider value={{ cars, copyCars, carsPerPage, setCurrentPage, currentCars, findCar, searchInput, onChange, showResult, filtered }}>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
