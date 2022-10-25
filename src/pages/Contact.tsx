import React from 'react'
import ContactHero from '../components/ContactHero'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Contact = () => {
    return (
        <>
            <NavBar />
            <ContactHero title="Contact Us" />
            <Contacts />
            <Footer />
        </>
    )
}

export default Contact
