import React, {useContext} from 'react';
import { ShopCartContext } from '../contexts/ShopCartContext'
import ShoppingCartTotal from '../components/ShoppingCartTotal';
import styles from '../styles/Checkout.module.css';
import {UserContext} from '../contexts/UserContext'

export default function Checkout() {
  const { purchases }  = useContext(ShopCartContext)

  const { addUserDataToContext }  = useContext(UserContext)

  //an object which will contain the collecting data from input field
  let userPersonalData = {
    userId: 1,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    postcode: '',
    streetAddress: '',
    phone: '',
  }

  //function for collection of the user data fires onChange at inputs
  //it saves collected data to the userPersonalData object
  function handle(event) {
    userPersonalData[event.target.id] = event.target.value 
  }

  //sending userData to UserContext happens when user clicks button at ShoppingCartTotal component
  //on Checkout page we get function AddUserDataToContext from UserContext an sending it as a prop to ShoppingCartTotal component
  
  return (
      <div className={`${styles.pageContentWrapper} mt-5 container sp-y`}>
        <div className={styles.cartPageContentWrap}>
          <div className="container container-wide">
            <div className="row d-flex justify-content-between ">
              <div className="col-lg-6 ">
                {/* Checkout Form Area Start */}
                <div className={styles.checkoutBillingDetailsWrap}>

                  {/* billingFormWrap */}
                  <h2 className={styles.h2}>Customer Information</h2>
                  <div className={styles.billingFormWrap}>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className={`${styles.inputItem} mt-0`}>
                            <label htmlFor="firstName" className="sr-only required">First Name</label>
                            <input type="text" id="firstName" placeholder="First Name" required onChange={handle} />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className={`${styles.inputItem} mt-md-0`}>
                            <label htmlFor="lastName" className="sr-only required">Last Name</label>
                            <input type="text" id="lastName" placeholder="Last Name" required onChange={handle} />
                          </div>
                        </div>
                      </div>

                      <div className={styles.inputItem}>
                        <label htmlFor="email" className="sr-only required">Email Address</label>
                        <input type="email" id="email" placeholder="Email Address" required onChange={handle}/>
                      </div>


                      {/* row */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className={styles.inputItem}>
                            <label htmlFor="city" className="sr-only required">Town / City</label>
                            <input type="text" id="city" placeholder="Town / City" required onChange={handle}/>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className={styles.inputItem}>
                            <label htmlFor="postcode" className="sr-only required">Postcode / ZIP</label>
                            <input type="number" id="postcode" placeholder="Postcode / ZIP" required onChange={handle}/>
                          </div>
                        </div>
                      </div>
                      {/* end row */}

                      <div className={styles.inputItem}>
                        <label htmlFor="streetAddress" className="sr-only required">Street address</label>
                        <input type="text" id="streetAddress" placeholder="Street address" required onChange={handle} />
                      </div>



                      <div className={styles.inputItem}>
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input type="tel" id="phone" placeholder="Phone" required onChange={handle}/>
                      </div>
                    </form>
                  </div>
                  {/* END billingFormWrap */}

                  {/* Payment details*/}
                  <h2 className={styles.h2}>Payment details</h2>
                  <div className={styles.billingFormWrap, styles.paymentDetails}>
                    <form action="#" method="post">
                      <div className="row">

                        <div className="col-md-6">
                          <div className={`${styles.inputItem} mt-0`}>
                            <label htmlFor="card_name" className="sr-only required">Card Name</label>
                            <input type="text" id="card_name" placeholder="Card name" required />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className={`${styles.inputItem} mt-md-0`}>
                            <label htmlFor="valid_date" className="sr-only required">Valid Date</label>
                            <input type="date" id="valid_date" placeholder="Valid Date" required />
                          </div>
                        </div>

                      </div>
                      {/* end row */}

                      <div className="row">

                        <div className="col-md-6">
                          <div className={`${styles.inputItem} mt-0`}>
                            <label htmlFor="card_number" className="sr-only required">Card number</label>
                            <input type="number" id="card_number" placeholder="Card number" required />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className={`${styles.inputItem} mt-md-0`}>
                            <label htmlFor="cvc_code" className="sr-only required">CVV2/CVC2 code</label>
                            <input type="number" id="cvc_code" placeholder="CVC Code" required />
                          </div>
                        </div>

                      </div>
                      {/* end row */}

                      <div className={styles.inputItem}>
                        <label htmlFor="card_holder" className="sr-only required">Card holder name</label>
                        <input type="text" id="card_holder" placeholder="Card holder name*" required />
                      </div>
                    </form>
                  </div>
                  {/* END Payment details */}
                </div>
              </div>

              <div className="col-lg-6  col-xl-5 ">
                <ShoppingCartTotal purchases={purchases} userPersonalData={userPersonalData} addUserDataToContext={addUserDataToContext} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}