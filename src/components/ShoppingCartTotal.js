import React from 'react'
import styles from '../styles/ShoppingCartTotal.module.css'

function ShoppingCartTotal() {
    return (
        <div className='mt-5 mt-lg-0'>
            <div className={styles.cartTotal}>
                <h5 className={styles.cartTotalHeading}>Cart Totals</h5>

                <div class="table-responsive">
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
                                   5 000kr
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
                

            </div>
        </div>
    )
}

export default ShoppingCartTotal