import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash  } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/ShoppingCard.module.css'

function ShoppingCart() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className={`${styles.shoppingCartTable} table-responsive`}>
                        <table className="table table-bordered text-center mb-0">
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.productList}>
                                        <div className="d-flex align-items-center">
                                            <div className={styles.removeIconBox}>
                                                <button className={styles.removeIconBtn}><FontAwesomeIcon icon={faTrash}/></button>
                                            </div>
                                            <a href="#" className={styles.productThumb}>
                                                <img src="http://source.unsplash.com/120x120?car" alt="Product" />
                                            </a>
                                            <a href="#" className={styles.productName}>Toyota x600</a>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.price}>100 000kr</span>
                                    </td>
                                    
                                    <td>
                                        <span className={styles.price}>100 000kr</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart