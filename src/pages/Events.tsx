import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import EventsSlider from '../components/EventsSlider'
import { EventsData } from '../components/EventsData'

function Events() {
    return (
        <>
            <NavBar />
            <HeroBanner title="Events" />
            <EventsSlider events={EventsData} />
            <Footer />
        </>
    )
}

export default Events
