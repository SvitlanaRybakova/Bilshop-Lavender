function CarouselIndicators(props) {
  const { index } = props;

  if(index === 0){
    return(
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={index}
          className="active"
          aria-current="true"
          aria-label={`Slide ${index + 1}`}
        ></button>
    )
  }else{
    return(
      <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={index}
          aria-label={`Slide ${index + 1}`}
        ></button>
    )
  }
}

export default CarouselIndicators;