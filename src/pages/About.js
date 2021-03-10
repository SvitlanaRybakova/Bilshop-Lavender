import styles from "../styles/About.Module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className={`${styles.about} container mt-5`}>
        <div className="mb-3 d-flex">
          <div className="row g-0">
            <div className={`col-md-6 order-md-2`}>
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1447&q=80"
                alt="USP img 1"
                className={`${styles.imgContainer}`}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body me-lg-4">
                <h5 className="card-title text-sm-center text-md-start mb-lg-4">
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
                src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="USP img 2"
                className={`${styles.imgContainer}`}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body ms-lg-4">
                <h5 className="card-title text-sm-center text-md-start mb-lg-4">
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
      </div>
      <div className="container-fluid">
        {/* <!--== Start Call to action Wrapper ==--> */}
        <div className={`${styles.callToActionContentArea} sm-top`}>
          {/* <div className={`${styles.callToActionArea} ${styles.home2}`}> */}
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="call-to-action-txt">
                  <h2>CARS THAT EVERYONE DREAMS OFF <span className="d-block mt-3">FIND YOUR CAR HERE</span> </h2>
                  <Link className={`${styles.findButton} btn`} to="/">
                    Shop Now
                      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className={styles.callToActionImageArea}>
            <div className={`${styles.imgWrapper} col-12 col-md-8 `}>
              <img style={{ width: '100%' }} src="https://i.imgur.com/JympBXg.png" alt="yellow audi" />
            </div>
          </div>
        </div>
      </div>
      {/* <!--== End Call to action Wrapper ==--> */}

      {/* sibscribe to newsletter */}
      <div className={`${styles.jumbo} container-fluid`}>
        <div className={styles.overlay}></div>
        <div className="container">
          <div className="text-center mt-5">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8 col-xl-5 ">
                  <div className={`${styles.newsletterContent} text-center`}>
                    <h4>SPECIAL <span>OFFER</span> FOR SUBSCRIPTION</h4>
                    <h2>GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
                    <p>Subscribe our newsletter and all latest news of our <br/>latest product, promotion and offers
                        </p>

                      <div className="newsletter-form-wrap">
                        <form action="#" method="post">
                          <div className="form-content">
                            <input type="email" placeholder="Enter your email here" />
                            <button className="btn-newsletter">Submit</button>
                          </div>
                        </form>
                      </div>
                        </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default About;
