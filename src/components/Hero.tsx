import React from 'react'
import '../styles/Hero.scss'

const Hero = () => {
    return (
        <div className="hero-container">
            <video src="/videos/home.mp4" autoPlay loop muted />
            <h1 style={{ color: 'white' }}>UWVR</h1>
            <h2 style={{ color: 'white' }}>Explore the wondrous world of XR</h2>
            <a href='/projects'><span>Our Projects</span></a>
            <a href='/events'><span>Our Events</span></a>
        </div>
    )
}

export default Hero
