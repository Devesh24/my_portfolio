import React from "react";
import Fade from 'react-reveal/Fade';


export default function ProjectCard(props) {
  return (
    <>
    <Fade left duration={1500}>
      <div className="projectCard">
        <div className="proImg">
          <img src={props.project.photo} alt={props.project.name} />
        </div>
        <div className="proBox">
          {props.project.name}
          <a title="Deployment" href={props.project.github} className="proLink" target="_blank" rel="noreferrer"><i className="fa-solid fa-link"></i></a>
        </div>
      </div>
      </Fade>
    </>
  );
}
