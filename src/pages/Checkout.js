import React, { useContext, useEffect } from 'react';
import { ShopCartContext } from '../contexts/ShopCartContext'
import ShoppingCartTotal from '../components/ShoppingCartTotal';
import styles from '../styles/Checkout.module.css';
import { UserContext } from '../contexts/UserContext'
import { CarContext } from '../contexts/CarContext';

export default function Checkout() {
  const { purchases } = useContext(ShopCartContext)
  const { showPrice } = useContext(CarContext);

  const { addUserDataToContext, orderHistory } = useContext(UserContext)

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
    cardName: '',
    validDate: '',
    cardNumber: '',
    cvcCode: '',
    cardHolder: ''
  }

  //function for collection of the user data fires onChange at inputs
  //it saves collected data to the userPersonalData object
  function handle(event) {
    userPersonalData[event.target.id] = event.target.value
  }

  //efter the form was submitted by user, 1) userPersonalData sends to the User context, 2) user is redirected on confirmation page 3) shopping cart is getting empty
  const handleSubmit = (e) => {
    e.preventDefault()
    orderHistory(purchases)
    addUserDataToContext(userPersonalData)
  }

  //when the user goes back from confirmation page with help av back-button in browser (but without pressing closing button at confirmation page), useEffect listens and deletes class d-none from Navbar, so Navbar renders again
  useEffect(() => {
    document.querySelector('nav').classList.remove('d-none')
  }, [])

  const props = {
    purchases,
    userPersonalData,
    showPrice
  }

  function ScrollToTopOnMount() {
    useEffect(() => {
      document.querySelector('body').scrollTo(0,0)
    }, []);
  
    return null;
  }

  return (
    <div className={`${styles.pageContentWrapper} mt-5 container sp-y`}>
      <ScrollToTopOnMount />
      <div className={styles.cartPageContentWrap}>
        <div className="container container-wide">
          <div className="row d-flex justify-content-between ">
            <div className="col-lg-6 ">
              {/* Checkout Form Area Start */}
              <div className={styles.checkoutBillingDetailsWrap}>

                {/* checkoutBillingDetailsWrap */}
                <h2 className={styles.h2}>Customer Information</h2>
                <div className={styles.billingFormWrap}>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-0`}>
                          <label htmlFor="firstName" className="sr-only required">First Name</label>
                          <input type="text" pattern="[A-Za-z]*" id="firstName" title="(only alphabetic characters)" placeholder="First Name" minLength="2" required onChange={handle} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-md-0`}>
                          <label htmlFor="lastName" className="sr-only required">Last Name</label>
                          <input type="text" pattern="[A-Za-z]*" id="lastName" title="(only alphabetic characters)" placeholder="Last Name" minLength="2" required onChange={handle} />
                        </div>
                      </div>
                    </div>

                    <div className={styles.inputItem}>
                      <label htmlFor="email" className="sr-only required">Email Address</label>
                      <input type="email" id="email" placeholder="Email Address" minLength="2" required onChange={handle} />
                    </div>


                    {/* row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className={styles.inputItem}>
                          <label htmlFor="city" className="sr-only required">Town / City</label>
                          <input type="text" pattern="[A-Za-z]*" id="city" title="(only alphabetic characters)" placeholder="Town / City" minLength="2" required onChange={handle} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={styles.inputItem}>
                          <label htmlFor="postcode" className="sr-only required">Postcode / ZIP</label>
                          <input type="number" id="postcode" min="0" placeholder="Postcode / ZIP" required onChange={handle} />
                        </div>
                      </div>
                    </div>
                    {/* end row */}

                    <div className={styles.inputItem}>
                      <label htmlFor="streetAddress" className="sr-only required">Street address</label>
                      <input type="text" pattern="^[^\s]+(\s+[^\s]+)*$" title="(you can't use space in the beginning)" id="streetAddress" placeholder="Street address" minLength="2" required onChange={handle} />
                    </div>



                    <div className={styles.inputItem}>
                      <label htmlFor="phone" className="sr-only">Phone</label>
                      <input type="number" pattern="[0-9]*" min="0" id="phone" placeholder="Phone" required onChange={handle} />
                    </div>

                    <h2 className={`${styles.h2} mb-4`}>Payment details</h2>
                    <div className="row">

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-0`}>
                          <label htmlFor="cardName" className="required">Card Name</label>
                          <input type="text" pattern="[A-Za-z]*" title="(only alphabetic characters)" id="cardName" minLength="4" required onChange={handle} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-md-0`}>
                          <label htmlFor="validDate" className="required">Valid Date</label>
                          <input type="number" pattern="[0-9]" min="0"   id="validDate" required onChange={handle} />
                        </div>
                      </div>

                    </div>
                    {/* end row */}

                    <div className="row">

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-0`}>
                          <label htmlFor="cardNumber" className="required">Card number</label>
                          <input type="number" id="cardNumber" min="0"  required onChange={handle} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-md-0`}>
                          <label htmlFor="cvcCode" className="required">CVV2/CVC2 code</label>
                          <input type="number" id="cvcCode" min="0" required onChange={handle} />
                        </div>
                      </div>

                    </div>
                    {/* end row */}

                    <div className={styles.inputItem}>
                      <label htmlFor="cardHolder" className="required">Card holder name</label>
                      <input type="text" pattern="[A-Za-z]*" title="(only alphabetic characters)" id="cardHolder" required onChange={handle} />
                    </div>

                    <button type='submit' className={`${styles.placeOrderButton} btn mt-5 container`}>Place order</button>
                  </form>
                </div>
                {/* END checkoutBillingDetailsWrap */}
              </div>
            </div>

            <div className={`${styles.cartTotalBox} order-first order-lg-last col-lg-6  col-xl-5`}>
              <ShoppingCartTotal props={props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}