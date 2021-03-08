import React, { useContext } from "react";
import styles from "../styles/Filter.Module.css";
import Cars from "../json/cars.json";
import { CarContext } from "../contexts/CarContext";
// import { Multiselect } from 'multiselect-react-dropdown';

function PriceRange(){
  const { onChangeMinMiles, onChangeMaxMiles, onChangeMinPrice, onChangeMaxPrice, findCarFilter, minPrice, maxPrice, minMiles, maxMiles, onChangeMake, onChangeModel, onChangeYear, make, model, year } = useContext(CarContext);

  return(
    <div className={styles.filtercontainer}>
    <form className="d-flex" onSubmit={findCarFilter}>
    <div className="container">
           <div className="row d-flex align-items-center justify-content-center">
             <div className="col-sm-3">
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Make"
                   value={make}
                   onChange={onChangeMake}
                 />
             </div>
             <div className="col-sm-3">
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Model"
                   value={model}
                   onChange={onChangeModel}
                 />
             </div>
             <div className="col-sm-3">
                 <input
                   type="number"
                   className="form-control"
                   placeholder="Year"
                   value={year}
                   onChange={onChangeYear}
                 />
             </div>
           </div>
         </div>

      <div className="form-row">
        <div className="col">
          <input type="number"
          className="form-control"
          placeholder="Min price"
          value={minPrice}
          onChange={onChangeMinPrice}/>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <input type="number"
           className="form-control"
           placeholder="Max price"
           value={maxPrice}
           onChange={onChangeMaxPrice}/>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <input type="number"
          className="form-control"
          placeholder="Min miles"
          value={minMiles}
          onChange={onChangeMinMiles}/>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <input type="number"
           className="form-control"
           placeholder="Max miles"
           value={maxMiles}
           onChange={onChangeMaxMiles}/>
        </div>
      </div>
      <button type="submit" className="btn">Filter</button>
    </form> 
    </div>
  );
}

export default PriceRange;