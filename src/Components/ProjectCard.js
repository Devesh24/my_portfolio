import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      <div className={`carousel-item ${props.active} py-5`}>
        <a className="pro" href={props.github} target="_blank" rel="noreferrer">
          <img
            src={require(`${props.photo}`)}
            className="proImg"
            alt={`Project ${props.id + 1}`}
          />
        </a>
        <a className="proLabel p-4 d-flex flex-column align-items-center" href={props.github} target="_blank" rel="noreferrer">
          <h3 className="mb-2">{props.title}</h3>
          <div className="mt-3">{props.info}</div>
        </a>
      </div>
    </>
  );
}
