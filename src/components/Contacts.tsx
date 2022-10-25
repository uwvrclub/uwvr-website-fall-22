import React from 'react'
import '../styles/Contacts.scss'

function Contacts() {
    return (
        <div className="main">
            <div className="contacts-wrapper">
                <h2>Contact Us At:</h2>
                <p>
                    Email:{' '}
                    <a href="mailto:uwvrclub@gmail.com">uwvrclub@gmail.com</a>
                </p>
                <p>
                    Instagram:{' '}
                    <a href="https://www.instagram.com/uwvrclub/">@uwvrclub</a>
                </p>
                <p>
                    Facebook:{' '}
                    <a href="https://www.facebook.com/UWaterlooVR/">
                        UWVR Club
                    </a>
                </p>
                <p>
                    Discord:{' '}
                    <a href="mailto:uwvrclub@gmail.com">uwvrclub@gmail.com</a>
                </p>
            </div>
        </div>
    )
}

export default Contacts