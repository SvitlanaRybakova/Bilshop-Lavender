import React from 'react';

export default function CarItem(props){
  const { car } = props;
  
  return(
    <>
    <div className="col-md-3">
    <h6 style={{width: '200px', height:'100px', border: '1px solid green' }}>{ car.make }</h6>
    </div>
    </>
  )
}