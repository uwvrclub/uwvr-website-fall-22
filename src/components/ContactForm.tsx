import React from 'react'
import '../styles/ContactForm.scss'

function ContactForm() {
    return (
        <>
            <div className="form-container">
                <h2 className="contact-title">
                    Have any questions? Contact Us!
                </h2>
                <div id="form-main">
                    <form method="post" action="/contact">
                        <>
                            {/* 
                        
                        1) We can implement a backend
                        2) We can use an online service (EmailJS, Formspree)
                        3) Can hide this section for now

                        */}
                        </>
                        <div className="field-container">
                            <label className="form-label">
                                Your Full Name<span>*</span>
                            </label>
                            <div className="form-input">
                                <input
                                    type="text"
                                    name="Full Name"
                                    className="form-input-area"
                                    required
                                />
                            </div>
                        </div>

                        <div className="field-container">
                            <label className="form-label">
                                Your Email Address<span>*</span>
                            </label>
                            <div className="form-input">
                                <input
                                    type="email"
                                    name="Email Address"
                                    className="form-input-area"
                                    required
                                />
                            </div>
                        </div>

                        <div className="field-container">
                            <label className="form-label">
                                Your Message<span>*</span>
                            </label>
                            <div className="form-input">
                                <textarea
                                    name="Message"
                                    className="form-input-area"
                                    rows={7}
                                    maxLength={2000}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="field-container">
                            <div className="contact-button-wrapper">
                                <button
                                    type="submit"
                                    className="contact-button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm
