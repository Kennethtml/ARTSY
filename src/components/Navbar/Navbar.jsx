import React, { useState } from 'react'
import './navbar.scss'
import bell from '../../assets/bell.svg'
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import hambugger from "../../assets/hambugger.svg";
import {NavLink} from "react-router-dom"

function Navbar() {

  const[toggle,setToggle]=useState(false)
  return (
    <nav className="nav wrapper">
        <button  className="hambugger btn-logo" onClick={()=>setToggle(!toggle)}>
            <img src={hambugger} alt="hambugger" />
        </button>
      <div className="logo">ARTSY.</div>
      <div className={`nav__links ${toggle? `toggle-active`:""}`}>
        <NavLink className="nav__links-links" to={'/'}><span>Home</span></NavLink>
        <NavLink className="nav__links-links" to={'market'}> <span>Market place</span></NavLink>
        <NavLink className="nav__links-links" to={"options"}><span>Options</span></NavLink>
        <NavLink className="nav__links-links" to={"drop"}>   <span>Drop</span></NavLink>
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