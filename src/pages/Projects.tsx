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

            <div className="projects">
                <HeroBanner
                    title="Projects"
                    src="images/banners/projects.jpeg"
                />
                <h2>Current Projects</h2>

                <div className="projects-container">
                    <ProjectCard
                        title="Virtual Reality Escape Room"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/5.png"
                        alt=""
                    />
                    <ProjectCard
                        title="3D Interactive Website"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                </div>
                <div className="projects-container upcoming">
                    <ProjectCard
                        title="UWVR Talks: Metaverses"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/events/events-placeholder.jpeg"
                        alt=""
                    />
                    <ProjectCard
                        title="UWVR Stickers"
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
