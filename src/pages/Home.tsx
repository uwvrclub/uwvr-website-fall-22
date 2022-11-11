import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PurposeStatement from '../components/PurposeStatement'
import ProjectCard from '../components/ProjectCard'
import '../styles/Home.scss'

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Hero />
            <PurposeStatement
                title="Our Purpose"
                content="The University of Waterloo Virtual Reality Club (UWVR) aims to allow students the opportunities to explore, experience, and contribute to the fascinating world of XR."
            />

            <div className="projects">
                <h2>What We Do</h2>
                <div className="projects-container">
                    <ProjectCard
                        title="Events &amp; Workshops"
                        cta="See Our Events"
                        content="Learn more about our past and upcoming events/workshops, and participate in our upcoming activities!"
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                    <ProjectCard
                        title="Our Projects"
                        cta="See Our Projects"
                        content="Find some of our amazing past projects, and learn more about the projects we are currently working on!"
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                    <ProjectCard
                        title="Get Involved"
                        cta="Get Involved"
                        content="Looking to get involved within the VR community? Join our discord or contact us to get the latest updates!"
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
