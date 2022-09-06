import React from "react";
import b1 from "../../asstes/a3.jpg";
import b2 from "../../asstes/a2.jpg";
import b3 from "../../asstes/a1.jpg";
import b4 from "../../asstes/slider4.jpg";
import b5 from "../../asstes/slider5.jpg";

function Banners() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ backgroundColor: "gray" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ backgroundColor: "gray" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ backgroundColor: "gray" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          style={{ backgroundColor: "gray" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
          style={{ backgroundColor: "gray" }}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active"  >
          <img src={b1} className="d-block w-100 banner" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b2} className="d-block w-100 banner" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b3} className="d-block w-100 banner" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b4} className="d-block w-100 banner" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={b5} className="d-block w-100 banner" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ color: "gray" }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ color: "gray" }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banners;
