import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';



export default function CarDetails() {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-md-5">
                {/* ******TODO dynamic link */}
                <img className="w-100"
                  src="../assets/car-pictures/Ford-Mustang-1969.jpg" alt="" />
              </div>
              {/* img-block */}


              {/* Start Product Info Area  */}
              <div className="col-md-7">
                <div className="product-details-info-content-wrap">
                  <div className="prod-details-info-content">
                    <h2>Hanging 4K Camera</h2>
                    <h5 className="price"><strong>Price:</strong> <span className="price-amount">$325.00</span>
                    </h5>
                    <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor
                    again is there anyone who loves or pursues or desires to obtain pain of itself,
              because it is pain, but because occasionally circles</p>
                    <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor
                    again is there anyone who loves or pursues or desires to obtain pain of itself,
                    because it is pain, but because occasionally circles occur in and pain can
              procure him some great ple cum solute nobie est eligendi option</p>

                    <div className="product-config">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tr>
                            <th className="config-label">Color</th>
                            <td className="config-option">
                              <div className="config-color">
                                <a href="#">Black</a>
                                <a href="#">Blue</a>
                                <a href="#">Green</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th className="config-label">Size</th>
                            <td className="config-option">
                              <div className="config-color">
                                <a href="#">Large</a>
                                <a href="#">Medium</a>
                                <a href="#">Small</a>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Product Info Area */}
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </>
  )
}