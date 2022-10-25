import React from 'react'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'

const Contact = () => {
    return (
        <>
            <NavBar />
            <HeroBanner src="images/contact.jpg" title="Contact Us" />
            <Contacts />
            <Footer />
        </>
    )
}

export default Contact
