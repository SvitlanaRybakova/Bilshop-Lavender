import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";


function MilageRange(){
  const { onChangeMinMilage, onChangeMaxMilage, findCarByMilage } = useContext(CarContext);

  return(
    <form className="d-flex" onSubmit={findCarByMilage}>
      <div className="form-row">
        <div className="col">
          <input type="number"
          className="form-control"
          placeholder="Min milage"
          onChange={onChangeMinMilage}/>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <input type="number"
           className="form-control"
           placeholder="Max milage"
           onChange={onChangeMaxMilage}/>
        </div>
      </div>
      <button type="submit" className="btn">Find by milage</button>
    </form> 
  );
}

export default MilageRange;