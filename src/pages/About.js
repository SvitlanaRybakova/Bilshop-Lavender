import styles from "../styles/About.Module.css";
import React from "react";

function About() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className={`${styles.about}`}>
      <div className="mb-3 d-flex">
        <div className="row g-0">
          <div className={`col-md-4 order-md-2`}>
            <img
              src="../assets/car-pictures/Buick-Reatta-1989.jpg"
              alt="USP img 1"
              className={`${styles.imgContainer}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-sm-center text-md-start">
                About Company
              </h5>
              <p className="card-text">
                Once the pickup braked the upfit. The aluminum engine was
                crashed by the Hino? The heavy duty, lifted pickup truck
                deconstructed. Once the wheel deconstructed the welder body
                while the upfitted hybrid was dumped by the axle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="../assets/car-pictures/Ford-Mustang-1969.jpg"
              alt="USP img 2"
              className={`${styles.imgContainer}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-sm-center text-md-start">
                We do things
              </h5>
              <p className="card-text">
                The axle crashed the work-ready service utility van. The
                aluminum axle was manufactured by the mobility. Once the
                rollback body demolished the lorry. Once the Hino upfitted the
                chipper body. The hauler body upfitted the diesel Nissan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <div className="card-body">
          <p className="card-text">We have the car just for you!</p>
          <a href="#" className="btn btnWhite">
            <button onClick={refreshPage}>Find your new car</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
