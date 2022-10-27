import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import '../styles/About.scss'

const About = () => {
    return (
        <div>
            <NavBar />
            <HeroBanner src="images/about.jpeg" title="About Us" />
            <section className="section-misson">
                <div className="mission-wrapper">
                    <h2>Our Mission</h2>
                    <p className="max-w-lg text-lg md:text-center font-light font-poppins italic">
                        The University of Waterloo Virtual Reality Club (UWVR)
                        was the first university VR club in Canada! Our main
                        vision for the club was and remains to make room for
                        undergraduate students to contribute to and explore the
                        wondrous world of XR (VR &amp; AR).
                    </p>
                </div>
            </section>

            <section className="section-about">
                <div className="about">
                    <div className="about-wrapper-left">
                        <div className="left">
                          <h2>About</h2>
                        </div>
                        <img src="images/ctrlv.jpg" alt="Ctrl V"/>
                    </div>
                    <div className="about-wrapper-right">
                        <img src="images/ctrlv.jpg" alt="Ctrl V"/>
                        <div className="right">
                          <h2>About</h2>
                        </div>
                    </div>
                    <div className="about-wrapper-left">
                        <div className="left">
                          <h2>About</h2>
                        </div>
                        <img src="images/ctrlv.jpg" alt="Ctrl V"/>
                    </div>
                    <div className="about-wrapper-right">
                        <img src="images/ctrlv.jpg" alt="Ctrl V"/>
                        <div className="right">
                          <h2>About</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
