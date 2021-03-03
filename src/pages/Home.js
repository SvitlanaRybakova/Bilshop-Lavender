import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import Carousel from "../components/Carousel";
import CarList from "../components/CarList";
import Searchbar from "../components/Searchbar";

function Home() {
  const { cars } = useContext(CarContext);

  return (
    <div>
      <Carousel />
      <Searchbar />
      <CarList />
    </div>
  );
}

export default Home;
