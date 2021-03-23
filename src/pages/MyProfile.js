import styles from "../styles/MyProfile.Module.css";
import React, { useContext, useState, useEffect } from "react";
import { CarContext } from "../contexts/CarContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function MyProfile() {

  const {  userOrders } = useContext(UserContext);
  const { showPrice } = useContext(CarContext);
  
  console.log(userOrders);

   for (let i = 0; i < userOrders.length; i++) {
     console.log(userOrders);
   }

  const history = useHistory();
 
  const props = {
    showPrice,
    userOrders,
  };

  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  


// the date in which an order has been made
  function Datum() {
    const today = new Date();
    const Month = today.getMonth() <= 12 ? "0" : "";
    const Day = today.getDate() <= 22 ? "0" : "";
    const date =
      Day +
      today.getDate() + "." + Month + (today.getMonth() + 1) +"." + today.getFullYear();
    return date;
  }

  return (
    <div className="container">
      <div className="row">
        <p className="h6">My Profile</p>

        <div className={styles.customerInfo}>
          <table className="table  table-responsive table-bordered">
            <thead>
              <tr>
                <td>NAME:</td>
                <td>
                  {" "}
                  {userInfo.firstName} {userInfo.lastName}
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>ADDRESS:</td>
                <td>
                  {" "}
                  {userInfo.streetAddress} {userInfo.postcode} {userInfo.city}{" "}
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>PHONE:</td>
                <td>{userInfo.phone}</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>EMAIL:</td>
                <td>{userInfo.emailAddress}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

   

      <div className={styles.productOverview}>
        <h3 className="my-5 pb-2 text-center">My Orders</h3>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th className="text-center">Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Date</th>
            </tr>
          </thead>
          <tbody>
          {
                    userOrders.products && userOrders.products.map((product, i) => (
                                <tr key={i}>
                                    <td>{product.make} {product.model} {product.year}</td>
                                    <td>{showPrice(product.price)} SEK</td>
                                </tr>
                            ))
                        }
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className={`${styles.datum}`}>
                  {Datum()}{" "}
                </div>{" "}
              </td>
            </tr>

{/*            
                  <td>
                    {product.make} {product.model} {product.year}
                  </td>
                  <td>{showPrice(product.price)} SEK</td> */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
