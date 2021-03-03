import React from 'react';
import styles from '../styles/PagePagination.module.css';

export default function PagePagination() {
  return (
    <div className="container">
      <nav aria-label="Page navigation example">
        <ul class={`${styles.ulPagination} pagination`}>
          <li class={`${styles.pageItem} page-item`}>
            <a class={`${styles.liItem} page-link`} href="#">Previous</a>
          </li>

          <li class={`${styles.pageItem} page-item`}>
            <a class={`${styles.liItem} page-link`} href="#">1</a>
          </li>

          <li class={`${styles.pageItem} page-item`}>
            <a class={`${styles.liItem} page-link`} href="#">2</a>
          </li>

          <li class={`${styles.pageItem} page-item`}>
            <a class={`${styles.liItem} page-link`} href="#">3</a>
          </li>

          <li class={`${styles.pageItem} page-item`}>
            <a class={`${styles.liItem} page-link`} href="#">Next</a>
          </li>

        </ul>
      </nav>
    </div>
  )
}