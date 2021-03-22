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
      document.querySelector('body').scrollTo(0, 0)
    }, []);

    return null;
  }
  const validateName = (value) => {

    return value
      .replace(/^\s*\d*/, "")
      .replace(/[0-9]/g, "")
      .replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase());
  }

  const validatePostcode = (value) => {
    return value.replace(/\s/g, "").match(/\d{1,3}/g)?.join(" ").substr(0, 6) || ""
  }

  const validateStreetAdress = (value) => {
    return value
      .replace(/^\s*\d*/, "")
      .replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase());
  }

  const validatePhoneNumber = (value) => {
    if (value.length <= 7){
      return  value.replace(/\-/g, "").match(/\d{1,3}/g)?.join("-").substring(0, 7)|| ""
    } else{
      const groupThreeString = value.substring(0, 7);
      const groupTwoString = value.substring(7, value.length);
      return (groupThreeString +
        '-' +
        groupTwoString.replace(/\s/g, "")
        .match(/\d{1,2}/g)?.join("-")
        )
        .substring(0, 13) || "" 
    }
   
  }

  const validateCardNumber = (value) => {
    return value.replace(/\s/g, "").match(/\d{1,4}/g)?.join(" ").substr(0, 19) || ""
  }

  const validateExpDate = (value) => {
    return value.replace(/\//g, "").match(/\d{1,2}/g)?.join("/").substr(0, 5) || ""
  }

  const validateCVC = (value) => {
    return value.match(/\d{1,3}/g)?.join("").substr(0, 3) || ""
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
                          <label htmlFor="firstName" className="">First Name</label>
                          <input
                            className={styles.input}
                            type="text"
                            id="firstName"
                            title="(only alphabetic characters)"
                            placeholder="Alicia" 
                            required
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateName(value)
                              handle(e)
                            }} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-md-0`}>
                          <label htmlFor="lastName" className="">Last Name</label>
                          <input className={styles.input}
                            type="text"
                            id="lastName"
                            title="(only alphabetic characters)"
                            placeholder="Brown"
                            title="(only alphabetic characters)"
                            required
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateName(value)
                              handle(e)
                            }} />
                        </div>
                      </div>
                    </div>

                    <div className={styles.inputItem}>
                      <label htmlFor="email" className="">Email Address</label>
                      <input className={styles.input} type="email" id="email" placeholder="example@gmail.com " minLength="2" required onChange={handle} />
                    </div>


                    {/* row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className={styles.inputItem}>
                          <label htmlFor="city" className="">Town / City</label>
                          <input className={styles.input}
                            type="text"
                            id="city"
                            title="(only alphabetic characters)"
                            placeholder=" Malmö"
                            required
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateName(value)
                              handle(e)
                            }} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={styles.inputItem}>
                          <label htmlFor="postcode" className="">Postcode / ZIP</label>
                          <input className={styles.input}
                            type="tel"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            id="postcode"
                            placeholder="222 25"
                            required 
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validatePostcode(value)
                              handle(e)
                            }}/>
                        </div>
                      </div>
                    </div>
                    {/* end row */}

                    <div className={styles.inputItem}>
                      <label htmlFor="streetAddress" className="">Street address</label>
                      <input className={styles.input} 
                      type="text" 
                      title="(you can't use space in the beginning)" 
                      id="streetAddress" 
                      placeholder="Nordanväg 28A"  
                      required 
                      onChange={(e) => {
                        const { value } = e.target
                        e.target.value = validateStreetAdress(value)
                        handle(e)
                      }} />
                    </div>



                    <div className={styles.inputItem}>
                      <label htmlFor="phone" className="">Phone</label>
                      <input 
                      className={styles.input} 
                      type="tel"
                        id="phone"
                        placeholder="073-123-12-12"
                        required
                        onChange={(e) => {
                          const { value } = e.target
                          e.target.value = validatePhoneNumber(value)
                          handle(e)
                        }}
                        
                      />
                    </div>

                    <h2 className={`${styles.h2} mb-4`}>Payment Details</h2>
                    <div className="row">

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-0`}>
                          <label htmlFor="cardName" className="required">Card Name</label>
                          <input
                            className={styles.input}
                            type="text"
                            id="cardName"
                            placeholder="Master Card"
                            required 
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateName(value)
                              handle(e)
                            }} />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-md-0`}>
                          <label htmlFor="validDate" className="required">Valid Date</label>
                          <input
                            className={styles.input}
                            placeholder="02/24"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            id="validDate"
                            required
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateExpDate(value)
                              handle(e)
                            }} />
                        </div>
                      </div>

                    </div>
                    {/* end row */}

                    <div className="row">

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-0`}>
                          <label htmlFor="cardNumber" className="required">Card number</label>
                          <input
                            className={styles.input}
                            placeholder="0000 0000 0000 0000"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            id="cardNumber"
                            required
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateCardNumber(value)
                              handle(e)
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className={`${styles.inputItem} mt-md-0`}>
                          <label htmlFor="cvcCode" className="required">CVV2/CVC2 code</label>
                          <input
                            className={styles.input}
                            placeholder="000"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            id="cvcCode"
                            required
                            onChange={(e) => {
                              const { value } = e.target
                              e.target.value = validateCVC(value)
                              handle(e)
                            }} />
                        </div>
                      </div>

                    </div>
                    {/* end row */}

                    <div className={styles.inputItem}>
                      <label htmlFor="cardHolder" className="required">Card holder name</label>
                      <input
                        className={styles.input}
                        placeholder="Alicia Brown"
                        type="text"
                        id="cardHolder"
                        required
                        onChange={(e) => {
                          const { value } = e.target
                          e.target.value = validateName(value)
                          handle(e)
                        }} />
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