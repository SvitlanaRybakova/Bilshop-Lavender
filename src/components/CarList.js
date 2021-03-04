import React, { useContext, useEffect, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import CarItem from "../components/CarItem";
import PagePagination from '../components/PagePagination'

export default function CarList() {
  const { 
    cars, 
    currentPage, 
    carsPerPage, 
    setCurrentPage,
    indexOfLastCar,
    indexOfFirstCar, 
    currentCars } = useContext(CarContext);


  // pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <div className="container container-wide">
      <div className="row mtn-30 d-flex justify-content-center">
        {currentCars.map((item) => (
          <CarItem key={item.vin} car={cars} />
        ))}
      </div>
      <PagePagination carsPerPage={carsPerPage} totalCars={cars.length} paginate={paginate} />
    </div>
  );
}
