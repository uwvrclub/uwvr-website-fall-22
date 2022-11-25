import React from 'react'
import ContactForm from '../components/ContactForm'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Contact = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <>
            <NavBar />
            <HeroBanner src="images/banners/contact.jpg" title="Contact Us" />
            <ContactForm />
            <Contacts />
            <Footer />
        </>
    )
}

export default Contact
