import React from 'react'
import '../styles/PurposeStatement.scss'

interface PurposeStatementProps {
    title?: string
    content?: string
}

function PurposeStatement(props: PurposeStatementProps) {
    return (
        <section className="section-purpose">
            <div className="purpose-wrapper">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </section>
    )
}

export default PurposeStatement
