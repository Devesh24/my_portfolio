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
          <div>
            <a title="Deployment" href={props.project.live} className="proLink" target="_blank" rel="noreferrer"><i className="fa-solid fa-link"></i></a>
            {props.project.id>0 && <a title="Github" href={props.project.github} className="proLink gitLink" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>}
            {props.project.id==0 && <a title="Overview" href={props.project.overview} className="proLink gitLink" target="_blank" rel="noreferrer"><i className="fa-solid fa-file-powerpoint"></i></a>}
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
}
