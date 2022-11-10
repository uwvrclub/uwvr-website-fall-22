import React from 'react'
import '../styles/ProjectCard.scss'

interface ProjectCardProps {
    src?: string
    alt?: string
    content?: string
    title?: string
    cta?: string
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <div className="card-container">
                <div className="img-container">
                    <img src={props.src} alt={props.alt} />
                </div>
                <h2 className="card-title">{props.title}</h2>
                <div className="card-text">
                    <p>{props.content}</p>
                </div>
                {props.cta && (
                    <div className="button-wrapper">
                        <a className="button" href="/projects">
                            {props.cta}
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectCard
