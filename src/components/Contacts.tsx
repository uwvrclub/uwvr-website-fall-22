import React from 'react'
import '../styles/Contacts.scss'
import SocialButtons from './SocialButtons'

function Contacts() {
    return (
        <div className="main">
            <div className="contacts-wrapper">
                <h2>Or reach out to us on any of our social media accounts!</h2>
                <SocialButtons
                    instagram="https://www.instagram.com/uwvrclub/"
                    linkedin="https://www.linkedin.com/company/uwvr/"
                    github="https://github.com/uwvrclub/"
                    facebook="https://facebook.com/uwvrclub/"
                />
            </div>
        </div>
    )
}

export default Contacts
