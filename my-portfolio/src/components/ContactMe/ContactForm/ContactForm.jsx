import React from 'react'
import "./ContactForm.css"
import emailjs from "emailjs-com"

const ContactForm = () => {

  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('shabeeb505', 'shabeebtemplate', e.target, 'wFKR08p38qVOlhewb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact-form-content">
        <form onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name='firstname' placeholder='First Name'/>
                <input type="text" name='lastname' placeholder='Last Name'/>
            </div>
            <input type="email" name='email' placeholder='Email'/>
            <textarea type='text' name="message" placeholder='Message' rows={3} />

            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm