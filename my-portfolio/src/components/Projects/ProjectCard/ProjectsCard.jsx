import React from 'react'
import "./ProjectsCard.css"

const ProjectsCard = ({details}) =>{
  return(
    <div>
      <div className="project-card">
        <h6> {details.title} </h6>

        <div className="project-duration"> {details.date} </div>

        <ul>
          {details.responsibilities.map((item) => {
            return(
              <li key={item}> {item} </li>
            )
          })}
        </ul>
      </div>
    </div>

  );
}

export default ProjectsCard;