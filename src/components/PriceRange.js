import React, { useContext } from "react";
import styles from "../styles/PriceRange.Module.css";
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
    <div className={`${styles.filtercontainer} container`}>
      <form onSubmit={findCarFilter}>

        <div className="row mb-4">
          <h2 className='fs-5'>Price</h2>
          <div className="col-6">
            <label htmlFor="minPrice">From</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={minPrice}
              onChange={onChangeMinPrice}
            >
              <option defaultValue>min price</option>
              <option value="50000">50 000 SEK</option>
              <option value="100000">100 000 SEK</option>
              <option value="200000">200 000 SEK</option>
              <option value="300000">300 000 SEK</option>
              <option value="400000">400 000 SEK</option>
            </select>
          </div>

          <div className="col-6">
            <label htmlFor="maxPrice">To</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={maxPrice}
              onChange={onChangeMaxPrice}
            >
              <option defaultValue>max price</option>
              <option value="100000">100 000 SEK</option>
              <option value="200000">200 000 SEK</option>
              <option value="300000">300 000 SEK</option>
              <option value="400000">400 000 SEK</option>
              <option value="500000">500 000 SEK</option>
              <option value="600000">600 000 SEK</option>
              <option value="700000">700 000 SEK</option>
              <option value="800000">800 000 SEK</option>
            </select>
          </div>
        </div>




        <div className="row mb-4">
          <h2 className='fs-5'>Miles</h2>
          <div className="col-6">
            <label htmlFor="minMiles">From</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={minMiles}
              onChange={onChangeMinMiles}
            >
              <option defaultValue>All results</option>
              <option value="10000">10 000</option>
              <option value="20000">20 000</option>
              <option value="30000">30 000</option>
              <option value="40000">40 000</option>
              <option value="50000">50 000</option>
              <option value="60000">60 000</option>
            </select>
          </div>
          <div className="col-6">
            <label htmlFor="maxMiles">To</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={maxMiles}
              onChange={onChangeMaxMiles}
            >
              <option defaultValue> All results</option>
              <option value="10000">10 000</option>
              <option value="20000">20 000</option>
              <option value="30000">30 000</option>
              <option value="40000">40 000</option>
              <option value="50000">50 000</option>
              <option value="60000">60 000</option>
            </select>
          </div>
        </div>
      

       
        <div className="row mb-4">
          <h2 className="fs-5">Make</h2>
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a make"
              value={make}
              onChange={onChangeMake}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="">
            <h2 className="fs-5">Model</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a model"
              value={model}
              onChange={onChangeModel}
            />
          </div>
        </div>

        <div className="row mb-4">
          <h2 className="fs-5">Year</h2>
          <div className="">
            <input
              type="number"
              className="form-control"
              placeholder="Enter a year"
              value={year}
              onChange={onChangeYear}
            />
          </div>
        </div>

       <div className="row">
      <div className="">
       
        <span className="second-word-formatting"></span>
        <button type="submit" className="btn1">
          Filter
              </button>
      </div>
      </div>
  
      </form >
    </div >
  );
}

export default PriceRange;