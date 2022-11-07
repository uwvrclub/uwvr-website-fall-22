import React from 'react'
import '../styles/ProjectCard.scss'

interface ProjectCardProps {
    src?: string
    alt?: string
    content?: string
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <div className="card-container">
                <div className="img-container">
                    <img src={props.src} alt={props.alt} />
                </div>
                <div className="card-title"></div>
                <div className="card-text">
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
