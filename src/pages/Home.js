import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import Carousel from "../components/Carousel";
import CarList from "../components/CarList";
import PagePagination from "../components/PagePagination";
import PriceRange from "../components/PriceRange";

function Home() {
  const { cars } = useContext(CarContext);

  return (
    <div>
      <Carousel />
      {/* Searchbar component inside PriceRange */}
      <PriceRange />
      <CarList />
      <PagePagination />
    </div>
  );
}

export default Home;
