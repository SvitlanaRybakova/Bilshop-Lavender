import React, { useContext } from "react";
import { CarContext } from "../contexts/CarContext";
import styles from "../styles/Search.Module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const { searchInput, findCar, setSearchInput } = useContext(CarContext);

  return (
    <form onSubmit={(e) => findCar(e)} className={styles.form}>
      <Link className={`${styles.searchIcon} `}>
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
}
export default Search;