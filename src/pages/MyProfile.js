import styles from "../styles/MyProfile.Module.css";
import React, { useContext, useState, useEffect } from "react";
import { ShopCartContext } from '../contexts/ShopCartContext'
import { CarContext } from '../contexts/CarContext';
import { useHistory } from "react-router-dom";
import ShoppingCartTotal from "../components/ShoppingCartTotal";

function MyProfile() {
  const { showPrice } = useContext(CarContext);
  const { purchases, setDeliveryCost, deleteProduct } = useContext(ShopCartContext)
  const [isRadioButtonClicked, setIsRadioButtonClicked] = useState('false')
 
  const history = useHistory();

  const handleClick = (e) => {
    setDeliveryCost(e)
    setIsRadioButtonClicked(!isRadioButtonClicked)
  }

  

  const goToCarDescription = (car) => {
    history.push(`/cars/${car.vin}`);
  };

  useEffect(() => {
  }, )

  const props = {
    showPrice,
    purchases
  }
  return (
    <div className="container">
      <div className="row">
        <p className="h6">My Profile</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>address</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>PHONE</th>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="h6">My Orders</p>
        <div className="col-lg-8">
        <div className={`${styles.shoppingCartTable} table-responsive`}>

        <table className="table table-bordered text-center mb-0">
        <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                 
                </tr>
              </thead>
              <tbody>

              {purchases.products.length > 0 && purchases.products.map((product, i) =>(
                      
                        <tr key={i}>
                          <td className={styles.productList}>
                            <div className="d-flex align-items-center">
                              
                              <div className='d-flex flex-column flex-sm-row align-items-sm-center'>
                                <div className={styles.productThumb}>
                                  <img
                                    src={`../assets/car-pictures/${product.make}-${product.model}-${product.year}.jpg`}
                                    alt="Product"
                                  />
                                </div>
                                <div
                                  onClick={() => goToCarDescription(product)}
                                  className={`${styles.productName} mb-3 ms-0 ms-sm-4 mb-sm-0`}>
                                  {product.make} {product.model} <span className='d-inline-block mt-2'>{product.year}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className={styles.tableColumn}>
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

          
          
        </div>
            
        </div>
       
      </div>
  
    


  );
}

export default MyProfile;
