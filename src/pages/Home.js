import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import Carousel from "../components/Carousel";
import CarList from "../components/CarList";
import Searchbar from "../components/Searchbar";
import PagePagination from "../components/PagePagination";
import PriceRange from "../components/PriceRange";
import MilageRange from "../components/MilageRange";

function Home() {
  const { cars } = useContext(CarContext);

  return (
    <div>
      <Carousel />
      <Searchbar />
      <PriceRange />
      <MilageRange />
      <CarList />
      <PagePagination />
    </div>
  );
}

export default Home;
