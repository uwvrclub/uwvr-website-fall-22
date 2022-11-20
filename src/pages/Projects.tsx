import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectCard'
import '../styles/css/Projects.css'

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
                        content="The UWVR club is developing its own VR escape room game project on the themes of time travel and magic. Through this project, we aim to gain proficiency and knowledge we can pass on to the rest of the community"
                        src="images/projects/3d-escape-rm.jpg"
                        alt=""
                    />
                    <ProjectCard
                        title="3D Interactive Website"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est. Dignissim enim sit amet venenatis urna cursus eget nunc."
                        src="images/projects/3js-website.jpeg"
                        alt=""
                    />
                </div>
                <div className="projects-container upcoming">
                    <ProjectCard
                        title="UWVR Talks: Metaverses"
                        content="A podcast where we talk about metaverses, their impact on society, and our own personal opinions and experiences on this topic."
                        src="images/projects/podcast.png"
                        cta="Listen Now"
                        href="https://anchor.fm/uwvr"
                        newWindow={true}
                        alt=""
                    />
                    <ProjectCard
                        title="UWVR Stickers"
                        content="Coming soon!"
                        src=""
                        alt=""
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Projects
