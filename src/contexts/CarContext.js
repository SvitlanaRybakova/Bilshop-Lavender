import React, { createContext, useState, useEffect } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  const carsarray = Cars;

  //variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(9);

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

  //variables for filter 
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minMiles, setMinMiles] = useState("");
  const [maxMiles, setMaxMiles] = useState("");

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
    if (searchInput.length > 0) {
      setCopyCars(
        cars.filter((item) => {
        return (
          item.make.toLowerCase().includes(searchInput.toLowerCase()) +
          item.model.toLowerCase().includes(searchInput.toLowerCase())
        );
      }))
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
    let alteredMinMiles;
    let alteredMaxMiles;
    let alteredMinPrice;
    let alteredMaxPrice;
    let alteredYear;

        if(minMiles == ""){
          alteredMinMiles = 0;
        }else{
          alteredMinMiles = minMiles;
        }
        if(maxMiles == ""){
          alteredMaxMiles = 10000000;
        }else{
          alteredMaxMiles = maxMiles;
        }
        if(minPrice == ""){
          alteredMinPrice = 0;
        }else{
          alteredMinPrice = minPrice;
        }
        if(maxPrice == ""){
          alteredMaxPrice = 10000000;
        }else{
          alteredMaxPrice = maxPrice;
        }
        // if(year == ""){
        //   alteredYear = "";
        // }else{
        //   alteredYear = year;
        // }
        // alteredYear = parseInt(alteredYear);
        // console.log(typeof(alteredYear), typeof(cars[0].year));

    setCopyCars(
      cars.filter((car) => {
        if(year == ""){
          if(
            (car.miles >= alteredMinMiles && car.miles <= alteredMaxMiles)
            && (car.price >= alteredMinMiles && car.price <= alteredMaxMiles)
            && car.make.toLowerCase().indexOf(make.toLowerCase()) >= 0
            && car.model.toLowerCase().indexOf(model.toLowerCase()) >= 0
          )
          {
            return car;
          };
        }else{
          if(
            (car.miles >= alteredMinMiles && car.miles <= alteredMaxMiles)
            && (car.price >= alteredMinMiles && car.price <= alteredMaxMiles)
            && car.make.toLowerCase().indexOf(make.toLowerCase()) >= 0
            && car.model.toLowerCase().indexOf(model.toLowerCase()) >= 0
            && car.year == year
          )
          {
            return car;
          };
        }
      })
    );
  }

  const values = {
    cars, 
    copyCars, 
    carsPerPage, 
    setCurrentPage, 
    currentCars, 
    findCar, 
    showPrice, 
    setSearchInput, 
    searchInput, 
    isFinded,
    onChangeMinPrice, 
    onChangeMaxPrice, 
    onChangeMinMiles, 
    onChangeMaxMiles,
    onChangeMake,
    onChangeModel,
    onChangeYear,
    findCarFilter
  }

  return (
    <CarContext.Provider value={ values }>
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
