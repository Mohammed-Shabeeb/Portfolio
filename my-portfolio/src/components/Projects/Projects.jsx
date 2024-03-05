import React, { useRef } from 'react'
import "./Projects.css"
import ProjectsCard from './ProjectCard/ProjectsCard'
import {PROJECTS} from '../utils/data'
import Slider from "react-slick"

export const Projects = () => {

  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideleft = () => {
    sliderRef.current.slickNext();
  };
  
  return (
    <section id='projects' className='project-container'>
        <h5>Projects</h5>

        <div className="project-content">

          <div className="arrow-right" onClick={slideRight}>
            <span className='material-symbol-outlined'>{">"}</span>
          </div>

          <div className="arrow-left" onClick={slideleft}>
            <span className='material-symbol-outlined'>{"<"}</span>
          </div>

          <Slider ref={sliderRef} {...settings} >

            {PROJECTS.map((item) =>{
              return(<ProjectsCard key={item.title} details={item} />)
            })}
            
          </Slider>
        </div>
    </section>
  )
}
