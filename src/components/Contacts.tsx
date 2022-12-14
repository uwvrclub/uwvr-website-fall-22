import React from 'react'
import '../styles/css/Contacts.css'
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
                    mail="mailto:uwvrclub@gmail.com"
                    discord="https://tr.ee/Gw-h0e9_x9"
                />
            </div>
        </div>
    )
}

export default Contacts
