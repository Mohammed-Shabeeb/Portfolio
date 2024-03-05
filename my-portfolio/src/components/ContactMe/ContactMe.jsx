import React from 'react'
import './ContactMe.css'
import github from "../assets/images/github.png"
import email from "../assets/images/email.jpg"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section id='contact' className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex: 1 }}>
                <ContactInfoCard
                    iconUrl={email}
                    text="mohammedshabeeb020@gmail.com"
                />

                <ContactInfoCard
                    iconUrl= {github}
                    text="https://github.com/Mohammed-Shabeeb"
                />
            </div>
            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>


    </section>
  )
}

export default ContactMe