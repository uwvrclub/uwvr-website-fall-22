import React from 'react'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import '../styles/NoPage.scss'

const NoPage = () => {
    return (
        <div>
            <NavBar />
            <HeroBanner src="images/404.jpg" title="Page Not Found" />
            <div className="no-page-content">
                <div className="no-page-content-wrapper">
                    <h2>Sorry, the page you were looking does not exist.</h2>
                    <p>
                        Return back to the <a href="/">home page</a>, or{' '}
                        <a href="/contact">contact us</a> if you can't find what
                        you were looking for!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NoPage
