import React from 'react'
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/ShoppingCartTotal.module.css'

function ShoppingCartTotal(props) {

    console.log(props.purchases);

    const location = useLocation()

    let buttonText = location.pathname === '/shopping-cart' ? 'Proceed to Checkout' : 'Place order'

    
    
    return (
        <div className='mt-5 mt-lg-0'>
            <div className={styles.cartTotal}>
                <h5 className={styles.cartTotalHeading}>Cart Totals</h5>

                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead className='border-bottom'>
                            <tr>
                                <th>Products</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.purchases.products.map((product, i) => (
                                    <tr key={i}>
                                        <td>
                                            {product.make}
                                            <p style={{fontSize: 12}}>{product.model}</p>
                                        </td>
                                        <td>
                                            {product.price}
                                        </td>
                                     </tr>
                                ))
                            }
                            <tr>
                                <td>
                                    Shipping
                                </td>
                                <td>
                                   {props.purchases.deliveryCost}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='border-top'>
                                <th>Total</th>
                                <td><b>{props.purchases.priceTotal}</b></td>
                            </tr>   
                        </tfoot>
                    </table>
                </div>
                <div className={styles.toCheckoutBtnBox}>
                    <Link to="/shopping-cart/checkout">
                    <span className={`btn ${styles.toCheckoutBtn} d-block`}>
                        {buttonText}
                    </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCartTotal