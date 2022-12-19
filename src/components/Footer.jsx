import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="details">
          <span>400 University Drive Suite</span>
          <span>200 Coral Gables,</span>
          <span>FL 33134 USA</span>
        </div>
        <div className="footer-links">
          <div className="footer-info">
            <span>Links</span>
            <span>Help</span>
            <span>Newsletter</span>
          </div>
          <div className="links-wrapper">
            <div className="links">
              <span>Home</span>
              <span>Shop</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <div className="links middle-links ">
              <span>Payment Option</span>
              <span>Return</span>
              <span>Privacy Policies</span>
            </div>
            <input
              className="line"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <span className="line subscribe">SUBSCRIBE</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>2022 Meubel House. All rights reverved</span>
      </div>
    </footer>
  );
};

export default Footer;
