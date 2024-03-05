import React from 'react'
import './Hero.css'
import me from "../assets/images/me.jpg"
import reactIcon from "../assets/images/reactIcon.png"
import html from "../assets/images/htm.png"
import css from "../assets/images/css.png"
import js from "../assets/images/js.png"

export default function Hero() {
  return (
    <section id='home' className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={reactIcon} alt="" />
                </div>
                <img className='me' src={me} alt="me" />
            </div>

            <div>
                <div className="tech-icon" id='h'>
                    <img src={html} alt="html" />
                </div>
                <div className="tech-icon"id='c'>
                    <img src={css} alt="css" />
                </div>
                <div className="tech-icon" id='j'>
                    <img src={js} alt="js" />
                </div>
            </div>
        </div>

        
    </section>
  )
}
