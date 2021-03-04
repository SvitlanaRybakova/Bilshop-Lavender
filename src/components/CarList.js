import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarItem from '../components/CarItem';


export default function CarList() {

  const { cars } = useContext(CarContext);

  return (
    <>
        <div className="container container-wide">
            <div className="row mtn-30">  
              {cars.map(item => (
                <CarItem key={item.vin} car={item} />
              ))}
            </div>
      </div>
    </>
  )
}