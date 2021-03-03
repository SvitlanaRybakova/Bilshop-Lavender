import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartTotal from "../components/ShoppingCartTotal";
import styles from "../styles/ShoppingCard.module.css";

function ShoppingCart() {
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
                        Toyota x600
                      </a>
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
            <div>
                <div className="form-check">
                    <input className={`${styles.formCheckRadio} form-check-input`} type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Home delivery (5 000 kr)
                    </label>
                </div>
                <div className="form-check">
                    <input className={`${styles.formCheckRadio} form-check-input`} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Pick up the car by yourself
                    </label>
                </div>
            </div>
        </div>
        
        <div className="col-lg-4">
          <ShoppingCartTotal />
          <div className={styles.toCheckoutBtnBox}>
            <Link to="/shopping-cart/checkout">
              <span className={`btn ${styles.toCheckoutBtn} d-block`}>
                Proceed to Checkout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
