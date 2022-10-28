import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Events() {

    return (
        <>
            <NavBar />
            <HeroBanner title="Events" />
            <Footer />
        </>
    )
}

export default Events
