import styles from "../styles/About.Module.css"

function About(){
  return(
    <div className={`${styles.about}`}>
      <div className="card mb-3 d-flex">
        <div className="row g-0">
          <div className={`col-md-4 order-md-2`}>
            <img src="../assets/car-pictures/Buick-Reatta-1989.jpg" alt="..."  className={`${styles.imgContainer}`}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">About Company</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 d-flex">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="../assets/car-pictures/Ford-Mustang-1969.jpg" alt="..." style={{maxWidth: "100%"}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">We do things</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <div className="card-body">
          <p className="card-text">We have the car just for you!</p>
          <a href="#" className="btn btn-primary">Find your new car</a>
        </div>
      </div>
    </div>
  );
}

export default About;