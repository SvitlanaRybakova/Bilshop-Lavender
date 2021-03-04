import React from 'react';
import styles from '../styles/PagePagination.module.css';

export default function PagePagination({carsPerPage, totalCars, paginate}) {
  const pageNumbers=[];
  
  for(let i=1; i <= Math.ceil(totalCars/carsPerPage); i++){
      pageNumbers.push(i);
  }

  return (
    <div className="container">
      <nav aria-label="Page navigation">
        <ul className={`${styles.ulPagination} pagination`}>
          {pageNumbers.map(number => (
            <li key={ number } className={`${styles.pageItem} page-item`}>
            <a onClick={(e) => paginate(e,number)} className={`${styles.liItem} page-link`} href="#">{number}</a>
          </li>
          ))}
        
        </ul>
      </nav>
    </div>
  )
}