import React from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "../data";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column app py-5" id="projects">
        <h1 className="pb-5 heading">&lt;Projects&gt;</h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
          {myProjects.map((elem)=>{
            return <ProjectCard project={elem} key={elem.id}/>
          })}
        </div>
        <h1 className="pt-5 heading">&lt;/Projects&gt;</h1>
      </div>
    </>
  );
}
