import React from 'react'
import './navbar.scss'
import bell from '../../assets/bell.svg'
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import hambugger from "../../assets/hambugger.svg";
import {NavLink} from "react-router-dom"
function Navbar() {
  return (
    <nav className="nav wrapper">
        <div className="hambugger">
            <img src={hambugger} alt="hambugger" />
        </div>
      <div className="logo">ARTSY.</div>
      <div className="nav__links">
        <NavLink className="nav__links-links" to={'/'}>Home</NavLink>
        <NavLink className="nav__links-links" to={'market'}>Market place</NavLink>
        <NavLink className="nav__links-links" to={"options"}>Options</NavLink>
        <NavLink className="nav__links-links" to={"drop"}> Drop</NavLink>
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