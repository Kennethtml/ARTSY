import React from 'react'
import './exhibition.scss'
import hero from '../../assets/hero.jpg'
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";
import trackbar from "../../assets/trackbar.svg";


function Exhibition() {
  return (
    <section className="exhibition ">
      <div className="header wrapper">
        <h2 className="">See Upcoming Auctions and Exhibitions</h2>
      </div>
      <div
        className="exhibition__hero wrapper"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="exhibition__hero-content">
          <div className="info">
            <span className="bullet"></span>
            <p className="title">MONALISA REDEFINED IN STYLE.</p>

            <span className="bullet-number">01</span>
            <p className="date">Start on : 08:00 GTS . Monday </p>
            <p className="about">
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
          </div>
          <div className="buttons">
            <a href="">see more</a>
            <button>set reminder</button>
          </div>
        </div>
      </div>
      <div className="exhibition__icons wrapper">
        <div className="trackbar">
          <img src={trackbar} alt="trackbar" />
        </div>

        <div className="exhibition__buttons">
          <button>
            <img src={prev} alt="previous" />
          </button>
          <button>
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Exhibition