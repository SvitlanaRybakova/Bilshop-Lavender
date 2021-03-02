import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import styles from '../styles/CarDetails.module.css';

export default function CarDetails() {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <>
      <div className="container mt-5">
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
              <div className="col-md-7 mt-5 mt-md-0">
                <div className={styles.productDetailsInfoContentWrap}>
                  <div className={styles.prodDetailsInfoContent}>
                    <h2 className={styles.h2}>Hanging 4K Camera</h2>
                    <h5 className={styles.price}><strong>Price:</strong> <span className={styles.priceAmoumt}>{cars.price}</span>
                    </h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nihil, est officia libero molestias corporis possimus odit delectus. Molestias non debitis dolores necessitatibus ratione voluptates expedita porro quibusdam dolorem esse.</p>

                    <div className={styles.productConfig}>
                      <div className={styles.tableResponsive}>
                        <table className={styles.table}>
                          <tr>
                            <th className={styles.configLabel}>Make</th>
                            <td className={styles.configOption}>
                              Panoz
                            </td>
                          </tr>

                          <tr>
                            <th className={styles.configLabel}>Model</th>
                            <td className={styles.configOption}>
                              Despasito
                            </td>
                          </tr>

                          <tr>
                            <th className={styles.configLabel}>Year</th>
                            <td className={styles.configOption}>
                              2006
                            </td>
                          </tr>
                         
                          <tr>
                            <th className={styles.configLabel}>City</th>
                            <td className={styles.configOption}>
                              Lund
                            </td>
                          </tr>

                          <tr>
                            <th className={styles.configLabel}>Miles</th>
                            <td className={styles.configOption}>
                              23355
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <button className="btn btnBordered mt-5 mx-auto">Add to Cart</button>
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