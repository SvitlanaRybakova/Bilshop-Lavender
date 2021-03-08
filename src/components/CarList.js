import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import CarItem from "../components/CarItem";
import PagePagination from '../components/PagePagination'

export default function CarList() {
  const {
    copyCars,
    carsPerPage,
    setCurrentPage,
    currentCars } = useContext(CarContext);

  // pagination
  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }
    return (
      <div className="container container-wide">
        <div className="row mtn-30 d-flex justify-content-center">
          {currentCars.map((item) => (
            <CarItem key={item.vin} car={item} />
          ))}
        </div>
        <PagePagination carsPerPage={carsPerPage} totalCars={copyCars.length} paginate={paginate} />
      </div>
    );
}
