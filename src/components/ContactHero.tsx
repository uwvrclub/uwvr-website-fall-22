import React from 'react'
import '../styles/ContactHero.scss'

interface HeroProps {
    src?: string
    title?: string
}

function ContactHero(props: HeroProps) {
    return (
        <div className="contact">
            <div className="hero-wrapper">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default ContactHero
