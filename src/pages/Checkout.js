import React from 'react';
import ShoppingCartTotal from '../components/ShoppingCartTotal';

export default function Checkout() {
  return (
    <>
      <div className="page-content-wrapper sp-y">
        <div className="cart-page-content-wrap">
          <div className="container container-wide">
            <div className="row d-flex justify-content-between ">
              <div className="col-lg-6 ">
                {/* Checkout Form Area Start */}
                <div className="checkout-billing-details-wrap">

                  {/* billingFormWrap */}
                  <h2>Customer Information</h2>
                  <div className="billing-form-wrap">
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item mt-0">
                            <label for="f_name" className="sr-only required">First Name</label>
                            <input type="text" id="f_name" placeholder="First Name" required />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-item mt-md-0">
                            <label for="l_name" className="sr-only required">Last Name</label>
                            <input type="text" id="l_name" placeholder="Last Name" required />
                          </div>
                        </div>
                      </div>

                      <div className="input-item">
                        <label for="email" className="sr-only required">Email Address</label>
                        <input type="email" id="email" placeholder="Email Address" required />
                      </div>


                      {/* row */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item">
                            <label for="town" className="sr-only required">Town / City</label>
                            <input type="text" id="town" placeholder="Town / City" required />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-item">
                            <label for="postcode" className="sr-only required">Postcode / ZIP</label>
                            <input type="number" id="postcode" placeholder="Postcode / ZIP" required />
                          </div>
                        </div>
                      </div>
                      {/* end row */}

                      <div className="input-item">
                        <label for="street-address" className="sr-only required">Street address</label>
                        <input type="text" id="street-address" placeholder="Street address" required />
                      </div>



                      <div className="input-item">
                        <label for="phone" className="sr-only">Phone</label>
                        <input type="tel" id="phone" placeholder="Phone" />
                      </div>
                    </form>
                  </div>
                  {/* END billingFormWrap */}

                  {/* Payment details*/}
                  <h2>Payment details</h2>
                  <div className="billing-form-wrap payment-details">
                    <form action="#" method="post">
                      <div className="row">

                        <div className="col-md-6">
                          <div className="input-item mt-0">
                            <label for="card_name" className="sr-only required">Card Name</label>
                            <input type="text" id="card_name" placeholder="Card name" required />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-item mt-md-0">
                            <label for="valid_date" className="sr-only required">Valid Date</label>
                            <input type="date" id="valid_date" placeholder="Valid Date" required />
                          </div>
                        </div>

                      </div>
                      {/* end row */}

                      <div className="row">

                        <div className="col-md-6">
                          <div className="input-item mt-0">
                            <label for="card_number" className="sr-only required">Card number</label>
                            <input type="number" id="card_number" placeholder="Card number" required />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="input-item mt-md-0">
                            <label for="cvc_code" className="sr-only required">CVV2/CVC2 code</label>
                            <input type="number" id="cvc_code" placeholder="CVC Code" required />
                          </div>
                        </div>

                      </div>
                      {/* end row */}

                      <div className="input-item">
                        <label for="card_holder" className="sr-only required">Card holder name</label>
                        <input type="text" id="card_holder" placeholder="Card holder name*" required />
                      </div>




                      {/* check-box 1*/}
                      <div className="checkout-box-wrap">
                        <div className="input-item">
                          <div className="custom-control custom-checkbox">
                            <input type="radio"
                              className="custom-control-input"
                              id="home_delivery"
                              name="delivery" value="deliveryHome" />

                            <label className="custom-control-label" for="home_delivery">Home delivery (the car is delivered to your home)</label>

                            <div>
                              <input type="radio" checked
                                className="custom-control-input"
                                id="pick_up_yourself"
                                name="delivery" value="pickupYourself" />

                              <label className="custom-control-label" for="pick_up_yourself">Pick up the car yourself</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end check-box 1*/}








                    </form>
                  </div>
                  {/* END Payment details */}
                </div>
              </div>

              <div className="col-lg-6  col-xl-5 ">
                <ShoppingCartTotal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}