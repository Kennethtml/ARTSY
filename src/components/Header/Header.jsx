import React from "react";
import "./header.scss";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.jpg";

import heromobile from '../../assets/heroimages.jpg'

function Header() {
  return (
    <header className="heading">
      <div className="heading__text">
        <h1 className="heading__text-header">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="heading__text-paragraph">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="heading__carousel-mobile">
        <img src={heromobile} alt="" />
      </div>
      <div className="heading__carousel">
        <div className="carousel-1">
          <div className="carousel__wrapper">
            <img src={carousel1} alt="carousel image" />

            <img src={carousel2} alt="carousel image" />

            <img src={carousel3} alt="carousel image" />

            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
          </div>
        </div>

        <div className="carousel-2">
          <div className="carousel__wrapper">

            <img src={carousel2} alt="carousel image" />

            <img src={carousel3} alt="carousel image" />

            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
          </div>
        </div>
        <div className="carousel-3">
          <div className="carousel__wrapper">


            <img src={carousel3} alt="carousel image" />

            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
            <img src={carousel2} alt="carousel image" />
          </div>
        </div>
        <div className="carousel-4">
          <div className="carousel__wrapper">



            <img src={carousel4} alt="carousel image" />

            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
            <img src={carousel2} alt="carousel image" />
            <img src={carousel3} alt="carousel image" />
          </div>
        </div>
        <div className="carousel-5">
          <div className="carousel__wrapper">




            <img src={carousel5} alt="carousel image" />
            <img src={carousel1} alt="carousel image" />
            <img src={carousel2} alt="carousel image" />
            <img src={carousel3} alt="carousel ☻image" />
            <img src={carousel4} alt="carousel image" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
