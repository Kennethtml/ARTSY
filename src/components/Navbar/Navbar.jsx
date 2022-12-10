import React, { useEffect, useState,useContext } from 'react'
import './navbar.scss'
import bell from '../../assets/bell.svg'
import x from "../../assets/x.png";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import hambugger from "../../assets/hambugger.svg";
import {NavLink} from "react-router-dom"
import { Context } from '../../context';
import { useSelector,useDispatch} from 'react-redux';
import { setToggle } from '../../features/navtoggler/navtoggler';

function Navbar() {

 const { toggle} = useSelector((store)=>store.navtoggle);
 const dispatch=useDispatch()



  return (
    <div className="nav nth">
      <nav className="wrapper nav">
        <button
          className="hambugger btn-logo"
          onClick={() => dispatch(setToggle())}
        >
          {!toggle && <img src={hambugger} alt="hambugger" />}
          {toggle && <img src={x} alt="hambugger" />}
        </button>
        <div className="logo">ARTSY.</div>
        <div className={`nav__links ${toggle ? `toggle-active` : ""}`}>
          <NavLink
            className="nav__links-links"
            to={"/"}
            onClick={() => dispatch(setToggle())}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            className="nav__links-links"
            to={"market"}
            o
            onClick={() => dispatch(setToggle())}
          >
            {" "}
            <span>Market place</span>
          </NavLink>
          <NavLink
            className="nav__links-links"
            to={"options"}
            onClick={() => dispatch(setToggle())}
          >
            <span>Options</span>
          </NavLink>
          <NavLink
            className="nav__links-links"
            to={"drop"}
            onClick={() => dispatch(setToggle())}
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