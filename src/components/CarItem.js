import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CarItem(props){
  const { car } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/cars/${car.vin}`);
  }
  
  return(
    <>
    <div className="col-md-3 m-2"  style={{border: '1px solid green'}}>
    <h6 style={{width: '200px', height:'100px',  }}>{ car.make }</h6>
    <div 
    onClick={handleClick}
    className="btn"
    >See more</div>
    </div>
    </>
  )
}