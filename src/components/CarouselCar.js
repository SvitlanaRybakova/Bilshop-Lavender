import styles from "../styles/Carousel.Module.css";

function CarouselCard(props) {
  const { car } = props;
  const { index } = props;

  const modelUpperCase = car.model.toUpperCase();

  if(index === 0){
    return(
      <div
        className={`${styles.carouselItem} carousel-item active`}
        data-bs-interval="4000"
      >
        <img
          src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
          className={`${styles.carouselImage} d-block`}
          alt={`${car.make} ${car.model}`}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1 className={styles.h1deal}>{car.discount} OFF ON THIS {modelUpperCase} {car.year}</h1>
        </div>
      </div>
    )
  }else{
    return(
      <div
        className={`${styles.carouselItem} carousel-item`}
        data-bs-interval="4000"
      >
        <img
          src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
          className={`${styles.carouselImage} d-block`}
          alt={`${car.make} ${car.model}`}
        />
        <div className="carousel-caption d-none d-md-block">
          <h1 className={styles.h1deal}>{car.discount} OFF ON THIS {modelUpperCase} {car.year}</h1>
        </div>
      </div>
    )
  }
}

export default CarouselCard;