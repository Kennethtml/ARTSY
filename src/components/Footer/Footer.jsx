import React from 'react'
import "./footer.scss"
import location from "../../assets/location.svg"
import message from "../../assets/message.svg"

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="footer__main">
        <div className="logo">ARTSY.</div>
        <ul>
          <li>Home</li>
          <li>Marketplace</li>
          <li>Auctions</li>
          <li>Drops</li>
        </ul>
        <ul>
          <li>Blog</li>
          <li>Wallets</li>
          <li>Rates</li>
          <li>High bids</li>
        </ul>
        <div className="contact">
          <div className="email">
            <img src={message} alt="message" />
            <p>artsystudios@gmail.com</p>
          </div>
          <div className="location">
            <img src={location} alt="location" />
            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
      <p className="copyright">Artsystudios © 2022. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer