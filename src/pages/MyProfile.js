import styles from "../styles/MyProfile.Module.css";
import React, { useContext, useState, useEffect } from "react";
import { CarContext } from "../contexts/CarContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function MyProfile() {
  const { userData, userOrders } = useContext(UserContext);
  const { showPrice } = useContext(CarContext);
  console.log(userOrders);

  const history = useHistory();
  const props = {
    showPrice,
    userData,
    userOrders,
  };

  for (let i = 0; i < userOrders.length; i++) {
    console.log(userOrders);
  }

  function currentDate() {
    const today = new Date();
    const nullBeforeMonth = today.getMonth() <= 9 ? "0" : "";
    const nullBeforeDay = today.getDate() <= 9 ? "0" : "";
    const date =
      nullBeforeDay +
      today.getDate() +
      "." +
      nullBeforeMonth +
      (today.getMonth() + 1) +
      "." +
      today.getFullYear();
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
                  {userData.firstName} {userData.lastName}
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>ADDRESS:</td>
                <td>
                  {" "}
                  {userData.streetAddress} {userData.postcode} {userData.city}{" "}
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>PHONE:</td>
                <td>{userData.phone}</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>EMAIL:</td>
                <td>{userData.email}</td>
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
            <tr>
              <td></td>
              <td></td>
              <td>
                <div className={`${styles.datum}`}>
                  {currentDate()}{" "}
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
