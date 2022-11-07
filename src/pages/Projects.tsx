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
            <HeroBanner title="Projects" src="" />
            <div className="projects">
                <h2>Current Projects</h2>

                <div className="projects-container">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>

                <h2>Upcoming Projects</h2>
                <div className="projects-container">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects
