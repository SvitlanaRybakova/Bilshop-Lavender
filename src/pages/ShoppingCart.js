import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartTotal from "../components/ShoppingCartTotal";
import styles from "../styles/ShoppingCard.module.css";
import { ShopCartContext } from '../contexts/ShopCartContext'
import { CarContext } from '../contexts/CarContext';

function ShoppingCart() {
  const { showPrice } = useContext(CarContext);
  const { purchases, setDeliveryCost, deleteProduct } = useContext(ShopCartContext)

  const [isRadioButtonClicked, setIsRadioButtonClicked] = useState('false')
  const [isDeleteProductClicked, setisDeleteProductClicked] = useState('false')

  const handleClick = (e) => {
    setDeliveryCost(e)
    setIsRadioButtonClicked(!isRadioButtonClicked)
  }

  const handleDeleteButtonClick = (productToDelete) => {
    deleteProduct(productToDelete)
    setisDeleteProductClicked(!isDeleteProductClicked)
  }

  useEffect(() => {
  }, [isRadioButtonClicked, isDeleteProductClicked])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className='table-responsive'>
            <table className="table table-bordered text-center mb-0">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  {/* <th>Total</th> */}
                </tr>
              </thead>
              <tbody>

                {purchases.products.length > 0 && purchases.products.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className={styles.removeIconBox} onClick={() => handleDeleteButtonClick(product)}>
                          <button className={styles.removeIconBtn}>
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                        <div className='d-flex flex-column flex-sm-row align-items-sm-center'>
                          <div className={styles.productThumb}>
                            <img
                              src={`../assets/car-pictures/${product.make}-${product.model}-${product.year}.jpg`}
                              alt="Product"
                            />
                          </div>
                          <a href="#" className={`${styles.productName} ms-sm-4 mb-3 mb-sm-0`}>
                            {product.make} {product.model} {product.year}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={styles.price}> {showPrice(product.price)} SEK </span>
                    </td>
                  </tr>
                ))
                }
                {
                  purchases.products.length === 0 &&
                  <tr>
                    <td className={styles.productList}>
                      <p className={styles.emptyCart}>The shopping cart is empty</p>
                    </td>
                    <td>

                    </td>
                  </tr>
                }

              </tbody>
            </table>
          </div>
          <div className={styles.shippingMethods} >
            <div className={`${styles.formCheckBox} form-check d-flex align-items-end`}>
              <input className={`${styles.formCheckRadio} form-check-input`} onClick={handleClick} value="paidDelivery" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Home delivery (5 000 SEK)
                    </label>
            </div>
            <div className={`${styles.formCheckBox} form-check d-flex align-items-end`}>
              <input className={`${styles.formCheckRadio} form-check-input`} onClick={handleClick} value="withoutDelivery" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor='flexRadioDefault2' >
                Pick up the car by yourself
                    </label>
            </div>
          </div>
        </div>

        <div className="col-lg-4">

          <ShoppingCartTotal purchases={purchases} />


        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
