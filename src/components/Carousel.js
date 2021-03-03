import styles from "../styles/Carousel.Module.css";

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-light slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className={`${styles.carouselContainer} carousel-inner`}>
        <div
          className={`${styles.carouselItem} carousel-item active`}
          data-bs-interval="4000"
        >
          <img
            src="../assets/car-pictures/Ford-Mustang-1969.jpg"
            className={`${styles.carouselImage} d-block`}
            alt="Ford Mustang"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className={styles.h1deal}>10% OFF ON THIS MUSTANG 1969</h1>
          </div>
        </div>
        <div
          className={`${styles.carouselItem} carousel-item`}
          data-bs-interval="4000"
        >
          <img
            src="../assets/car-pictures/Hyundai-Tiburon-2006.jpg"
            className={`${styles.carouselImage} d-block`}
            alt="Hyundai Triburon"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className={styles.h1deal}>10% OFF ON THIS TIBURON 2006</h1>
          </div>
        </div>
        <div
          className={`${styles.carouselItem} carousel-item`}
          data-bs-interval="4000"
        >
          <img
            src="../assets/car-pictures/Panoz-Esperante-2007.jpg"
            className={`${styles.carouselImage} d-block`}
            alt="Panoz Esperante"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className={styles.h1deal}>10% OFF ON THIS ESPERANTE 2007</h1>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
