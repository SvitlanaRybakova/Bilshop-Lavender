import React from 'react';
import styles from '../styles/PagePagination.module.css';

export default function PagePagination({carsPerPage, totalCars, paginate}) {
  const pageNumbers=[];
  
  for(let i=1; i <= Math.ceil(totalCars/carsPerPage); i++){
      pageNumbers.push(i);
  }

  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul class={`${styles.ulPagination} pagination`}>
          {pageNumbers.map(number => (
             <li class={`${styles.pageItem} page-item`}>
            <a onClick={() => paginate(number)} class={`${styles.liItem} page-link`} href="#">{number}</a>
          </li>
          ))}
         
        </ul>
      </nav>
    </div>
  )
}