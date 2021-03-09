import React from 'react'
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/ShoppingCartTotal.module.css'

function ShoppingCartTotal(props) {

    const showPrice = (carItem) => {
        const price = String(carItem);
        return price.split(/(\d{3})/).join(' ').trim();
    }
    
    console.log(props);

    const location = useLocation()

    // button text and link address are depends on current url path
    let buttonText
    let linkAdress

    if(location.pathname === '/shopping-cart') {
        buttonText = 'Proceed to Checkout'
        linkAdress = "/shopping-cart/checkout"
    } else if (location.pathname === '/shopping-cart/checkout') {
        buttonText = 'Place order'
        linkAdress = "/shopping-cart/checkout/confirmation"
    }

    //if the user is on the Checkout page and clicks at button 'Place order' then send the collected on the Checkout page user data to UserContext
    const handleClick = (e) => {
        if(linkAdress.includes('confirmation'))
        props.addUserDataToContext(props.userPersonalData)
    }
    
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
                                            <p style={{fontSize: 12}}>{product.model} {product.year}</p>
                                        </td>
                                        <td>
                                            {showPrice(product.price)} SEK 
                                        </td>
                                     </tr>
                                ))
                            }
                            <tr>
                                <td>
                                    Shipping
                                </td>
                                <td>
                                   {props.purchases.deliveryCost} SEK
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className='border-top'>
                                <th>Total</th>
                                <td>
                                    <b>{showPrice(props.purchases.priceTotal)} 
                                    {
                                        typeof props.purchases.priceTotal === 'number' && 
                                        <span> SEK</span>
                                    }
                                    </b>
                                </td>
                            </tr>   
                        </tfoot>
                    </table>
                </div>

                <div className={styles.toCheckoutBtnBox}>
                    <Link to={linkAdress}>
                    <span className={`btn ${styles.toCheckoutBtn} d-block`} onClick={(e)=> {handleClick(e)}}>
                        {buttonText}
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartTotal