import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import 'react-multi-carousel/lib/styles.css'
import EventsSlider from '../components/EventsSlider'
import { PastEventsData } from '../data/PastEventsData'
import { UpcomingEventsData } from '../data/UpcomingEventsData'
import '../styles/css/Events.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Events() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <>
            <NavBar />
            <div className="events">
                <HeroBanner src="images/banners/events.jpg" title="Events" />
                <EventsSlider
                    events={UpcomingEventsData}
                    heading="Fall 2022 Events"
                />
                <EventsSlider events={PastEventsData} heading="Past Events" />
            </div>
            <Footer />
        </>
    )
}

export default Events
