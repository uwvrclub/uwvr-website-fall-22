import React from 'react'
import '../styles/css/Footer.css'
import SocialButtons from './SocialButtons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <div className="footer-menu-wrapper">
                    <div className="footer-menu-items">
                        <h2>UWVR Club</h2>
                        <a href="#/about">About Us</a>
                        <a href="#/gallery">Gallery</a>
                        <a href="#/projects">Our Projects</a>
                    </div>
                    <div className="footer-menu-items">
                        <h2>Get Involved</h2>
                        <a href="#/events">Our Events</a>
                        <a href="#/apply">Join The Team</a>
                        <a href="#/contact">Contact Us</a>
                    </div>
                </div>

                <div className="footer-logo">
                    <a href="#/">
                        <img
                            src="images/logos/uwvr-written-logo.png"
                            alt="UWVR Logo"
                        />

                        <SocialButtons
                            instagram="https://www.instagram.com/uwvrclub/"
                            linkedin="https://www.linkedin.com/company/uwvr/"
                            facebook="https://facebook.com/uwvrclub/"
                            discord="https://tr.ee/Gw-h0e9_x9"
                        />
                    </a>
                </div>
            </div>
            <small className="uwvr-website-rights">&copy; UWVR 2022</small>
        </div>
    )
}

export default Footer
