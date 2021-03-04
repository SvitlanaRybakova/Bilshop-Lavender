import React, { useContext, useEffect, useState } from "react";
import { CarContext } from "../contexts/CarContext";
import CarItem from "../components/CarItem";
import PagePagination from '../components/PagePagination'

export default function CarList() {
  const { cars } = useContext(CarContext);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(9)

  
  const [temp, setTemp] = useState([]);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = temp.slice(indexOfFirstCar, indexOfLastCar);
  const [isPaginate, setPaginate] = useState(true);

  useEffect(() => {
    console.log('in use effect');
    setTemp(cars);
    console.log(temp);
    console.log('currentCars', currentCars);
  }, [isPaginate])



  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
    // setPaginate(true);
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
