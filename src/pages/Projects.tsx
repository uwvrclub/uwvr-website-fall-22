import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.scss'

function Projects() {
    return (
        <>
            <NavBar />
            <HeroBanner title="Projects" src="images/banners/projects.jpeg" />
            <div className="projects">
                <h2>Current Projects</h2>

                <div className="projects-container">
                    <ProjectCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                    <ProjectCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                    <ProjectCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                </div>

                <h2>Upcoming Projects</h2>
                <div className="projects-container">
                    <ProjectCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                    <ProjectCard
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects
