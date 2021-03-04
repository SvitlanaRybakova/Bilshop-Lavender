import { createContext, useEffect, useState } from "react";
import Cars from "../json/cars.json";

export const CarContext = createContext();

function CarContextProvider(props) {
  //   useState = { showResult: true, filtered: [] };
  const carsarray = Cars;

  const [cars, setCars] = useState([...carsarray]);

  //   const [copyCar, setCopyCar] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const copyCar = [...Cars];

  //   useEffect(() => {
  //     setCopyCar(cars);
  //   }, []);

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
        copyCar.filter((item) => {
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
    <CarContext.Provider
      value={{ cars, findCar, searchInput, onChange, showResult, filtered }}
    >
      {props.children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
