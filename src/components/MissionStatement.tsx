import React from 'react'
import '../styles/css/MissionStatement.css'

interface MissionStatementProps {
    title?: string
    content?: string
}

function MissionStatement(props: MissionStatementProps) {
    return (
        <section className="section-misson">
            <div className="mission-wrapper">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </section>
    )
}

export default MissionStatement
