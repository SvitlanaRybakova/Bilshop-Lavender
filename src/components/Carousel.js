function Carousel() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="../assets/car-pictures/Ford-Mustang-1969.jpg"
            className="d-block w-100"
            alt="Ford Mustang"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="../assets/car-pictures/Hyundai-Tiburon-2006.jpg"
            className="d-block w-100"
            alt="Hyundai Triburon"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="../assets/car-pictures/Panoz-Esperante-2007.jpg"
            className="d-block w-100"
            alt="Panoz Esperante"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
