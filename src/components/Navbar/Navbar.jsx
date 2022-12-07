import React, { useEffect, useState,useContext } from 'react'
import './navbar.scss'
import bell from '../../assets/bell.svg'
import x from "../../assets/x.png";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import hambugger from "../../assets/hambugger.svg";
import {NavLink} from "react-router-dom"
import { Context } from '../../context';

function Navbar() {

 const { setToggle, toggle} = useContext(Context);


  return (
    <div className="nav nth">
      <nav className="wrapper nav">
        <button
          className="hambugger btn-logo"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle && <img src={hambugger} alt="hambugger" />}
          {toggle && <img src={x} alt="hambugger" />}
        </button>
        <div className="logo">ARTSY.</div>
        <div className={`nav__links ${toggle ? `toggle-active` : ""}`}>
          <NavLink
            className="nav__links-links"
            to={"/"}
            onClick={() => setToggle(false)}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            className="nav__links-links"
            to={"market"}
            onClick={() => setToggle(false)}
          >
            {" "}
            <span>Market place</span>
          </NavLink>
          <NavLink
            className="nav__links-links"
            to={"options"}
            onClick={() => setToggle(false)}
          >
            <span>Options</span>
          </NavLink>
          <NavLink
            className="nav__links-links"
            to={"drop"}
            onClick={() => setToggle(false)}
          >
            {" "}
            <span>Drop</span>
          </NavLink>
        </div>
        <div className="nav__buttons">
          <button className="btn-logo">
            <img src={search} alt="search" />
          </button>
          <button className="btn-logo">
            <img src={cart} alt="cart" />
          </button>
          <button className="btn-logo">
            <img src={bell} alt="bell" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar