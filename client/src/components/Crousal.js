import React from "react";
import "./Crousal.css";
const Crousal = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/6faa737edc86bb70.jpg?q=50"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://imgs.search.brave.com/SkyJKknMqzcsHKTQADy_obKQY3Q6W00bqbS67wJLyX4/rs:fit:626:500:1/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/c3BlY2lhbC1vZmZl/ci1tb2Rlcm4tc2Fs/ZS1iYW5uZXItdGVt/cGxhdGVfMTAxNy0y/MDY2Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw    "
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://imgs.search.brave.com/EwJuB1121VIYBA4RLxo8ZkoR-UoAkGDhEba5mDztIpU/rs:fit:1140:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/ZDFrVUdjRm5SUHVG/ME9sTXR6anR3SGFE/RiZwaWQ9QXBp"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Crousal;
