import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import 'react-multi-carousel/lib/styles.css'
import EventsSlider from '../components/EventsSlider'
import { PastEventsData } from '../data/PastEventsData'
import { UpcomingEventsData } from '../data/UpcomingEventsData'
import '../styles/Events.scss'

function Events() {
    return (
        <>
            <NavBar />
            <div className="events">
                <HeroBanner src="images/banners/events.jpg" title="Events" />
                <EventsSlider
                    events={UpcomingEventsData}
                    heading="Upcoming Events"
                />
                <EventsSlider events={PastEventsData} heading="Past Events" />
            </div>
            <Footer />
        </>
    )
}

export default Events
