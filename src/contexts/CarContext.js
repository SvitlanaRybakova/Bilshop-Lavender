import { createContext, useState, useEffect } from "react";
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
  const [carsPerPage] = useState(9);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  // * array for rendering data with pagination
  const currentCars = copyCars.slice(indexOfFirstCar, indexOfLastCar);

  // variables for search bar
  const [searchInput, setSearchInput] = useState("");

  //variables for filter
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minMiles, setMinMiles] = useState(null);
  const [maxMiles, setMaxMiles] = useState(1000000);
  
  // show price in friendly set
  const showPrice = (carItem) => {
    const price = String(carItem);
    return price.split(/(\d{3})/).join(' ').trim();
  }

  // functions for search bar
  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const findCar = (e) => {
    e.preventDefault();
    if (searchInput.length > 0) {
      setCopyCars(
        cars.filter((item) => {
          return (
            item.make.toLowerCase().includes(searchInput.toLowerCase()) +
            item.model.toLowerCase().includes(searchInput.toLowerCase())
          );
        })
      );
    }
    setSearchInput("");
  };

  // functions for filter
  const onChangeMake = (e) => {
    setMake(e.target.value);
  };
  const onChangeModel = (e) => {
    setModel(e.target.value);
  };
  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
  };
  const onChangeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };
  const onChangeMinMiles = (e) => {
    setMinMiles(e.target.value);
  };
  const onChangeMaxMiles = (e) => {
    setMaxMiles(e.target.value);
  };

  const findCarFilter = (e) =>{
    e.preventDefault();
    setCopyCars(
      cars.filter((car) => {
        if(
          (car.miles >= minMiles && car.miles <= maxMiles)
          && (car.price >= minPrice && car.price <= maxPrice)
          && car.make.toLowerCase().indexOf(make.toLowerCase()) >= 0
          && car.model.toLowerCase().indexOf(model.toLowerCase()) >= 0
          && car.year == year
        ){
          return car;
        };
      })
    );
  }

  return (
    <CarContext.Provider value={{ cars, copyCars, carsPerPage, setCurrentPage, currentCars, findCar, searchInput, onChange, showPrice, onChangeMinPrice, onChangeMaxPrice, onChangeMinMiles, onChangeMaxMiles, findCarFilter, minPrice, maxPrice, minMiles, maxMiles, onChangeMake, make, onChangeModel, model, onChangeYear, year }}>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;