import React from 'react'
import '../styles/css/Hero.css'

const Hero = () => {
    return (
        <div className="hero-container">
            <video id="my-video" src="videos/home2.mp4" autoPlay loop muted />
            <div className="hero-wrapper-home">
                <h1>UWVR</h1>
                <h2>Explore the wondrous world of XR</h2>
                <br />

                {
                    // To add buttons in the future
                    /*
                        <div className="button-wrapper">
                            <a href="/projects" className="button">
                                <span>Our Projects</span>
                            </a>
                        </div>
                        <div className="button-wrapper">
                            <a href="/projects" className="button">
                                <span>Our Projects</span>
                            </a>
                        </div>
                    */
                }
            </div>
        </div>
    )
}

export default Hero
