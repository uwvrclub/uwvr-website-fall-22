import React from 'react'
import '../styles/css/ProjectCard.css'

interface ProjectCardProps {
    src?: string
    alt?: string
    content?: string
    title?: string
    cta?: string
    href?: string
    newWindow?: boolean
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
                        {props.href && (
                            <a
                                className="button"
                                href={props.href}
                                target={props.newWindow ? '_blank' : ''}
                                rel="noreferrer"
                            >
                                {props.cta}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default ProjectCard
