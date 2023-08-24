import React from "react";
import SkillCard from "./SkillCard";
import { mySkills } from "../data";

export default function Skills() {
  return (
    <>
      <div className="d-flex flex-column app py-5" id="skills">
        <h1 className="heading">&lt;Skills&gt;</h1>
        <div className="d-flex flex-wrap justify-content-center skills_main">
          {mySkills.map((element, ind) => {
            return <SkillCard element={element} key={ind} />;
          })}
        </div>
        <h1 className="heading mt-2">&lt;/Skills&gt;</h1>
      </div>
    </>
  );
}
