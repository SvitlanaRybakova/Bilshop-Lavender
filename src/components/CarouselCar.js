import styles from "../styles/Carousel.Module.css";
import { useHistory } from "react-router-dom";

function CarouselCard(props) {
  const { car } = props;
  const { index } = props;
  const history = useHistory();
  const modelUpperCase = car.model.toUpperCase();

  const handleClick = () => {
    history.push(`/cars/${car.vin}`);
  };

  return (
    <div
      className={`${styles.carouselItem} carousel-item  ${
        index === 0 ? "active" : ""
      } `}
      data-bs-interval="4000"
      onClick={handleClick}
    >
      <img
        src={`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`}
        className={`${styles.carouselImage} d-block`}
        alt={`${car.make} ${car.model}`}
      />
      <div className="carousel-caption d-md-block">
        <h1 className={styles.h1deal}>
          {car.discount} OFF ON THIS {modelUpperCase} {car.year}
        </h1>
      </div>
    </div>
  );
}

export default CarouselCard;
