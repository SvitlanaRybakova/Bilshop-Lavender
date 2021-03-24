import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import styles from "../styles/Search.Module.css";


function Search() {
  const { searchInput, findCar, setSearchInput } = useContext(CarContext);

  return (
    <div className="container">
    <form onSubmit={(e) => findCar(e)} className={styles.form}>
    <div className={styles.searchBar}>
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          id="searchbarId"
        />
    </div>
    </form>
    </div>
  );
}
export default Search;
