import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import MissionStatement from '../components/MissionStatement'
import NavBar from '../components/NavBar'
//import '../styles/css/About.css'
import '../styles/css/About.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const About = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <div>
            <NavBar />
            <HeroBanner src="images/banners/about.jpg" title="About Us" />
            <MissionStatement
                title="Our Mission"
                content="The University of Waterloo Virtual Reality Club (UWVR)
                        was the first university VR club in Canada! Our main
                        vision for the club was and remains to make room for
                        undergraduate students to contribute to and explore the
                        wondrous world of XR (VR &amp; AR)."
            />
            <section className="section-about">
                <div className="about">
                    <div className="about-wrapper-left">
                        <div className="left">
                            <h2>Projects</h2>
                            <p>
                                Through our tech projects, we aim to inspire
                                students to take on various VR/AR projects and
                                showcase the potential of VR/AR.
                            </p>
                            <div className="button-wrapper">
                                <a className="button" href="#/projects">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div>
                            <img
                                src="images/events/projects.jpg"
                                alt="Projects"
                            />
                        </div>
                    </div>
                    <div className="about-wrapper-right">
                        <img
                            src="images/projects/podcast.png"
                            alt="Podcasts &amp; Workshops"
                        />
                        <div className="right">
                            <h2>Podcasts &amp; Workshops</h2>
                            <p>
                                Through our podcast and workshops, we aim to
                                spread awareness and knowledge about
                                developments in the XR world.
                            </p>
                            <div className="button-wrapper">
                                <a className="button" href="#/projects">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about-wrapper-left">
                        <div className="left">
                            <h2>Events</h2>
                            <p>
                                Through our events, we aim to encourage students
                                to network within and get involved with their
                                community.
                            </p>
                            <div className="button-wrapper">
                                <a className="button" href="#/events">
                                    Our Events
                                </a>
                            </div>
                        </div>
                        <img src="images/events/ctrlv.jpg" alt="Ctrl V" />
                    </div>
                    <div className="about-wrapper-right">
                        <img
                            src="images/events/get-involved.png"
                            alt="Get Involved"
                        />
                        <div className="right">
                            <h2>Get Involved</h2>
                            <p>
                                The UWVR club strives to connect students with
                                companies in the field of VR/AR and to create
                                new professional opportunities.
                            </p>
                            <div className="button-wrapper">
                                <a className="button" href="#/contact">
                                    Get Involved
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
