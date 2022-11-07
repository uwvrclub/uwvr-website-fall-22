import React from 'react'
import '../styles/ProjectCard.scss'

interface ProjectCardProps {}

function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <div className="card-container">
                <div className="img-container">
                    <img src="images/404.jpg" alt="" />
                </div>
                <div className="card-title"></div>
                <div className="card-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lacus vel facilisis volutpat est.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
