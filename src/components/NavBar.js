import React, { useState } from "react";
import styles from "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <a>UWVR</a>
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-menu-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-menu-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="menu-btn">
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
}

export default NavBar;
