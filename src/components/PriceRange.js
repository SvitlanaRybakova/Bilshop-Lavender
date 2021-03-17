import React, { useContext } from "react";
import styles from "../styles/Filter.Module.css";
import Cars from "../json/cars.json";
import { CarContext } from "../contexts/CarContext";

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
              <label htmlFor="minPrice">Min price</label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={minPrice}
                onChange={onChangeMinPrice}
              >
                <option defaultValue>Filter min price</option>
                <option value="50000">50.000 SEK</option>
                <option value="100000">100.000 SEK</option>
                <option value="200000">200.000 SEK</option>
                <option value="300000">300.000 SEK</option>
                <option value="400000">400.000 SEK</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="maxPrice">Max Price</label>

              <select
                className="form-select"
                aria-label="Default select example"
                value={maxPrice}
                onChange={onChangeMaxPrice}
              >
                <option defaultValue>Filter max price</option>
                <option value="100000">100.000 SEK</option>
                <option value="200000">200.000 SEK</option>
                <option value="300000">300.000 SEK</option>
                <option value="400000">400.000 SEK</option>
                <option value="500000">500.000 SEK</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="minMiles">Min miles</label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={minMiles}
                onChange={onChangeMinMiles}
              >
                <option defaultValue>Filter min miles</option>
                <option value="10000">10.000</option>
                <option value="20000">20.000</option>
                <option value="30000">30.000</option>
                <option value="40000">40.000</option>
                <option value="50000">50.000</option>
                <option value="60000">60.000</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="maxMiles">Max miles</label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={maxMiles}
                onChange={onChangeMaxMiles}
              >
                <option defaultValue>Filter max miles</option>
                <option value="10000">10.000</option>
                <option value="20000">20.000</option>
                <option value="30000">30.000</option>
                <option value="40000">40.000</option>
                <option value="50000">50.000</option>
                <option value="60000">60.000</option>
              </select>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-2">
              <label htmlFor="model">Make</label>
              <input
                type="text"
                className="form-control"
                placeholder="Filter Make"
                value={make}
                onChange={onChangeMake}
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                placeholder="Filter Model"
                value={model}
                onChange={onChangeModel}
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                className="form-control"
                placeholder="Filter Year"
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