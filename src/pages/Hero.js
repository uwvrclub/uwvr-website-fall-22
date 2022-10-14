import React from "react";
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/hero-background.mp4" autoPlay loop muted />
      <h1 style={{color: 'white'}}>replace w anything</h1>
    </div>
  );
};

export default Hero;
