import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import '../styles/Gallery.scss'

function Gallery() {
    return (
        <>
            <NavBar />
            <div className="gallery">
                <HeroBanner
                    src="images/banners/coming-soon.jpg"
                    title="Coming Soon!"
                />
                {/* Temporary Disclaimer */}
                <div className="gallery-disclaimer">
                    <h2>
                        Stay tuned for our gallery coming soon! Return back to
                        the <a href="/">home page</a>, or{' '}
                        <a href="/contact">contact us</a> if you have any
                        questions!
                    </h2>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery
