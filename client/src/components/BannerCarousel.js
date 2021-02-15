import React from "react";

const BannerCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="/images/banner-phone.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item " data-bs-interval="10000">
          <img
            src="/images/banner-svg-1.svg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default BannerCarousel;

const bannerImages = ["/images/banner-phone.png", "/images/banner-svg-1.svg"];
