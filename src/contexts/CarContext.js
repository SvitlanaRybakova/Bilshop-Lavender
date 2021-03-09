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
  const [currentCars, setCurrentCars] = useState(
    copyCars.slice(indexOfFirstCar, indexOfLastCar)
  );

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
    setCurrentCars(copyCars.slice(indexOfFirstCar, indexOfLastCar));
  }, [currentPage, isSearching]);

  // show price in friendly set
  const showPrice = (carItem) => {
    const price = String(carItem);

    if (price.length % 3 == 0) {
      return price
        .split(/(\d{3})/)
        .join(" ")
        .trim();
    } else {
      let priceSep = "";
      //add a space as a separator in integers
      return (priceSep = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "));
    }
  };

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
        })
      );
    } else {
      setCopyCars(cars);
    }
    setSearchInput("");
  };

  useEffect(() => {
    setMake("");
    setModel("");
    setYear("");
    setMinPrice("");
    setMaxPrice("");
    setMinMiles("");
    setMaxMiles("");
  }, [copyCars, currentCars]);

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

  const findCarFilter = (e) => {
    e.preventDefault();
    let alteredMinMiles;
    let alteredMaxMiles;
    let alteredMinPrice;
    let alteredMaxPrice;

    if (minMiles == "") {
      alteredMinMiles = 0;
    } else {
      alteredMinMiles = minMiles;
    }
    if (maxMiles == "") {
      alteredMaxMiles = 10000000;
    } else {
      alteredMaxMiles = maxMiles;
    }
    if (minPrice == "") {
      alteredMinPrice = 0;
    } else {
      alteredMinPrice = minPrice;
    }
    if (maxPrice == "") {
      alteredMaxPrice = 10000000;
    } else {
      alteredMaxPrice = maxPrice;
    }
    setCopyCars(
      cars.filter((car) => {
        if (
          car.miles >= alteredMinMiles &&
          car.miles <= alteredMaxMiles &&
          car.price >= alteredMinPrice &&
          car.price <= alteredMaxPrice &&
          car.make.toLowerCase().indexOf(make.toLowerCase()) >= 0 &&
          car.model.toLowerCase().indexOf(model.toLowerCase()) >= 0
        ) {
          if (year != "" && car.year == year) {
            return true;
          } else if (year == "") {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      })
    );
  };

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
    findCarFilter,
    make,
    model,
    year,
    minPrice,
    maxPrice,
    minMiles,
    maxMiles,
  };

  return (
    <CarContext.Provider value={values}>{props.children}</CarContext.Provider>
  );
}

export default CarContextProvider;
