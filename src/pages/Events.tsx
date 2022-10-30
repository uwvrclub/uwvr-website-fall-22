import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import EventsSlider from '../components/EventsSlider'
import { PastEventsData } from '../data/PastEventsData'
import { UpcomingEventsData } from '../data/UpcomingEventsData'

function Events() {
    return (
        <>
            <NavBar />
            <HeroBanner src="images/ctrlv.jpg" title="Events" />
            <EventsSlider
                events={UpcomingEventsData}
                heading="Upcoming Events"
            />
            <EventsSlider events={PastEventsData} heading="Past Events" />
            <Footer />
        </>
    )
}

export default Events
