import React from 'react'
import './navbar.scss'
import bell from '../../assets/bell.svg'
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import hambugger from "../../assets/hambugger.svg";
function Navbar() {
  return (
    <nav className="nav wrapper">
        <div className="hambugger">
            <img src={hambugger} alt="hambugger" />
        </div>
      <div className="logo">ARTSY.</div>
      <div className="nav__links">
        <div className="nav__links-links">Home</div>
        <div className="nav__links-links">Market place</div>
        <div className="nav__links-links">Options</div>
        <div className="nav__links-links"> Drop</div>
      </div>
      <div className="nav__buttons">
        <button className="btn-logo"><img src={search} alt="search" /></button>
        <button className="btn-logo"><img src={cart} alt="cart" /></button>
        <button className="btn-logo"><img src={bell} alt="bell" /></button>
      </div>
    </nav>
  );
}

export default Navbar