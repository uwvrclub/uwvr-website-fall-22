import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Leads from '../components/Leads'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <h1>Home</h1>
            <Leads />
            <Footer />
        </div>
    )
}

export default Home
