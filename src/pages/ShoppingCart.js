import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartTotal from "../components/ShoppingCartTotal";
import styles from "../styles/ShoppingCard.module.css";
import { ShopCartContext } from '../contexts/ShopCartContext'

function ShoppingCart() {

  const { purchases }  = useContext(ShopCartContext)

  console.log(purchases.products);
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
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

               { purchases.products.map((product, i) => (
                 <tr>
                 <td className={styles.productList}>
                   <div className="d-flex align-items-center">
                     <div className={styles.removeIconBox}>
                       <button className={styles.removeIconBtn}>
                         <FontAwesomeIcon icon={faTrash} />
                       </button>
                     </div>
                     <a href="#" className={styles.productThumb}>
                       <img
                         src="http://source.unsplash.com/120x120?car"
                         alt="Product"
                       />
                     </a>
                     <a href="#" className={styles.productName}>
                       {product.make}
                     </a>
                   </div>
                 </td>
                 <td>
                   <span className={styles.price}> {product.price} </span>
                 </td>

                 <td>
                   <span className={styles.price}> {purchases.priceTotal}</span>
                 </td>
                </tr>
               ))
               
               }
                    
              </tbody>
              
            </table>
          </div>
            <div className={styles.shippingMethods}>
                <div className={`${styles.formCheckBox} form-check d-flex align-items-end`}>
                    <input className={`${styles.formCheckRadio} form-check-input`} type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Home delivery (5 000 kr)
                    </label>
                </div>
                <div className={`${styles.formCheckBox} form-check d-flex align-items-end`}>
                    <input className={`${styles.formCheckRadio} form-check-input`} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor='flexRadioDefault2' >
                        Pick up the car by yourself
                    </label>
                </div>
            </div>
        </div>
        
        <div className="col-lg-4">

          <ShoppingCartTotal/>
          
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
