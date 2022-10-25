import React from 'react'
import '../styles/HeroBanner.scss'

interface HeroBannerProps {
    src?: string
    title?: string
}

function HeroBanner(props: HeroBannerProps) {
    const styles = {
        hero: {
            background: props.src
                ? 'url(' + props.src + ')'
                : 'url(images/fallback.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
    } as const

    return (
        <div className="hero-main" style={styles.hero}>
            <div className="hero-wrapper">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default HeroBanner
