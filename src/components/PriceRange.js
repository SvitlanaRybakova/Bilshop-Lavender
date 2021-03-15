import React, { useContext } from "react";
import styles from "../styles/Filter.Module.css";
import Cars from "../json/cars.json";
import { CarContext } from "../contexts/CarContext";
// import { Multiselect } from "multiselect-react-dropdown";

function PriceRange() {
  const {
    onChangeMinMiles,
    onChangeMaxMiles,
    onChangeMinPrice,
    onChangeMaxPrice,
    findCarFilter,
    minPrice,
    maxPrice,
    minMiles,
    maxMiles,
    onChangeMake,
    onChangeModel,
    onChangeYear,
    make,
    model,
    year,
  } = useContext(CarContext);

  return (
    <div className={styles.filtercontainer}>
      <form className="d-flex" onSubmit={findCarFilter}>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-2">
              <label for="MinPrice"> Min price</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected> Search min price</option>
                <option value="1">50000-100000</option>
                <option value="2">100000-200000</option>
                <option value="3">200000-300000</option>
                <option value="4">300000-400000</option>
                <option value="5">500000-600000</option>

                <input
                  type="number"
                  /*placeholder="Min price"*/
                  value={minPrice}
                  onChange={onChangeMinPrice}
                />
              </select>
            </div>

            <div className="col-md-2">
              <label for="MaxPrice"> Max Priece</label>

              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected> Search max price</option>
                <option value="1">50000-100000</option>
                <option value="2">100000-200000</option>
                <option value="3">200000-300000</option>
                <option value="4">300000-400000</option>
                <option value="5">500000-600000</option>
                <option value="6"> 600000</option>
                <input
                  type="number"
                  /*placeholder="Max price"*/
                  value={maxPrice}
                  onChange={onChangeMaxPrice}
                />
              </select>
            </div>

            <div className="col-md-2">
              <label for="MinMiles"> Min miles</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Search Miles</option>
                <option value="1"> 10000-20000</option>
                <option value="2"> 20000-30000</option>
                <option value="3"> 30000-40000</option>
                <option value="4"> 40000-50000</option>
                <option value="5"> 50000-60000</option>
                <option value="6"> 60000-70000</option>
                <input
                  type="number"
                  /*placeholder="Min miles"*/
                  value={minMiles}
                  onChange={onChangeMinMiles}
                />
              </select>
            </div>
            <div className="col-md-2">
              <label for="MaxMiles"> Max Miles</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected> Search Miles</option>
                <option value="1"> 10000-20000</option>
                <option value="2"> 20000-30000</option>
                <option value="3"> 30000-40000</option>
                <option value="4"> 40000-50000</option>
                <option value="5"> 50000-60000</option>
                <option value="6"> 60000-70000</option>
                <input
                  type="number"
                  /*placeholder="Max miles"*/
                  value={maxMiles}
                  onChange={onChangeMaxMiles}
                />
              </select>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-2">
              <label for="VehicleType">VehicleType</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search Make"
                value={make}
                onChange={onChangeMake}
              />
            </div>

            <div className="col-md-2">
              <label for="VehicleType">Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search Model"
                value={model}
                onChange={onChangeModel}
              />
            </div>

            <div className="col-md-2">
              <label for="VehicleYear"> Year</label>
              <input
                type="number"
                className="form-control"
                placeholder="Search Year"
                value={year}
                onChange={onChangeYear}
              />
            </div>

            <div className="col-md-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="second-word-formatting"></span>
              <button type="submit" className="btn1">
                Filter
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PriceRange;
