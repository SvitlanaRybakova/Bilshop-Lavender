import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";


function PriceRange(){
  const { onChangeMinPrice, onChangeMaxPrice, findCarByPrice } = useContext(CarContext);

  return(
    <form className="d-flex" onSubmit={findCarByPrice}>
      <div className="form-row">
        <div className="col">
          <input type="number"
          className="form-control"
          placeholder="Min price"
          onChange={onChangeMinPrice}/>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <input type="number"
           className="form-control"
           placeholder="Max price"
           onChange={onChangeMaxPrice}/>
        </div>
      </div>
      <button type="submit" className="btn">Find by price</button>
    </form> 
  );
}

export default PriceRange;