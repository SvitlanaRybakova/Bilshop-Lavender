import React from 'react'
import { Link } from "react-router-dom";
import styles from '../styles/ShoppingCartTotal.module.css'

function ShoppingCartTotal(props) {

    
    console.log(props.isDeliveryRequired);

    let deliverySum = props.isDeliveryRequired ? '5000' : '0'

    
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
                            <tr>
                                <td>
                                    Toyota x600
                                </td>
                                <td>
                                    100 000kr
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Shipping
                                </td>
                                <td>
                                   {deliverySum} kr
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='border-top'>
                                <th>Total</th>
                                <td><b>105 000kr</b></td>
                            </tr>   
                        </tfoot>
                    </table>
                </div>
                <div className={styles.toCheckoutBtnBox}>
                    <Link to="/shopping-cart/checkout">
                    <span className={`btn ${styles.toCheckoutBtn} d-block`}>
                        Proceed to Checkout
                    </span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCartTotal