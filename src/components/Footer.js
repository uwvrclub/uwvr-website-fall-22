import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="footer-menu-wrapper">
          <div className="footer-menu-items">
            <h2>About</h2>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
          </div>
          <div className="footer-menu-items">
            <h2>Contact</h2>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
          </div>
        </div>
        <div className="footer-menu-wrapper">
          <div className="footer-menu-items">
            <h2>Events</h2>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
          </div>
          <div className="footer-menu-items">
            <h2>About</h2>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
            <a href="/">Placeholders</a>
          </div>
        </div>
      </div>
      <small class='uwvr-website-rights'>UWVR &copy; 2022</small>
    </div>
  );
};

export default Footer;
