import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarItem from '../components/CarItem';

export default function CarList(){

  const { cars } = useContext(CarContext);
  console.log(cars);
return(
  <>
  <div className="row">
    { cars.map(item => (
      <CarItem key={item.vin} car={item}/>
    ))}
  </div>
  </>

)
}