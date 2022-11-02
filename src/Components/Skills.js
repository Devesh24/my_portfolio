import React from "react";
import SkillCard from "./SkillCard";

const mySkills = [
  {percent: 90, skillName: "HTML 5", id:1},
  {percent: 90, skillName: "CSS 3", id:2},
  {percent: 75, skillName: "JavaScript", id:3},
  {percent: 75, skillName: "ReactJS", id:4},
  {percent: 50, skillName: "mySQL", id:5},
  {percent: 90, skillName: "BootStrap", id:6},
  {percent: 70, skillName: "C++", id:7}
]

export default function Skills() {
  
  return (
    <>
      <div className="d-flex flex-column app py-5 px-5" id="skills">
        <h1 className="mb-4 ms-2 heading">&lt;Skills&gt;</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {mySkills.map((element, ind) => {
            return <SkillCard percent={element.percent} skillName={element.skillName} id={element.id} key={ind}/>
            // <div className="col-3 my-2" key={ind}>
            // </div>
          })}
        </div>
        <h1 className="mt-4 ms-2 heading">&lt;/Skills&gt;</h1>
      </div>
    </>
  );
}
