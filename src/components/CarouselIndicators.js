function CarouselIndicators(props) {
  const { index } = props;

  
    return(
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={index}
          className={`${index === 0 ? "active" : "" }`}
          aria-current={`${index === 0 ? "true" : "" }`}
          aria-label={`Slide ${index + 1}`}
        ></button>
    )
  }

export default CarouselIndicators;