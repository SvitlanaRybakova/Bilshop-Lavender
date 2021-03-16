import React from 'react'
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/ShoppingCartTotal.module.css'

function ShoppingCartTotal(props) {
    //useLocation is used for finding out about what page user is on, because we want that button "Proceed to checkout" renders only on the shopping Cart page
    const location = useLocation() 

    let linkAdress
    linkAdress = props.props.purchases.products.length > 0 ? "/shopping-cart/checkout" : '#' 
    
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
                                props.props.purchases.products.map((product, i) => (
                                    <tr key={i}>
                                        <td>
                                            {product.make}
                                            <p style={{fontSize: 12}}>{product.model} {product.year}</p>
                                        </td>
                                        <td>
                                            {props.props.showPrice(product.price)} SEK 
                                        </td>
                                     </tr>
                                ))
                            }
                            <tr>
                                <td>
                                    Shipping
                                </td>
                                    {
                                        props.props.purchases.products.length > 0 && 
                                        <td>
                                            {props.props.purchases.deliveryCost}
                                            { props.props.purchases.products.length > 0 && ' SEK'}
                                        </td>
                                    }
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='border-top'>
                                <th>Total</th>
                                <td>
                                    { 
                                        props.props.purchases.products.length > 0 && 
                                        <b>
                                            {props.props.showPrice(props.props.purchases.priceTotal)} 
                                            <span> SEK</span>
                                        </b>
                                    }
                                </td>
                            </tr>   
                        </tfoot>
                    </table>
                </div>
                

                <div className={styles.toCheckoutBtnBox}>

                    {/* Button renders only on shopping Cart page */}
                    { location.pathname === '/shopping-cart' &&
                        <Link to={linkAdress}>
                            <span className={`btn ${styles.toCheckoutBtn} d-block`}>
                                Proceed to Checkout
                            </span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartTotal