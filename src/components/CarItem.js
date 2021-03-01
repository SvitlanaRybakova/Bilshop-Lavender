import React from 'react';

export default function CarItem(props){
  const { car } = props;
  
  return(
    <>
    <h6>{ car.make }</h6>
    </>
  )
}