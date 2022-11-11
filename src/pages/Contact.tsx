import React from 'react'
import ContactForm from '../components/ContactForm'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'

const Contact = () => {
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
