import React from "react";

export default function SkillCard(props) {
  
  const fill = () => {
    let width = 0;
    const elem = document.getElementById(`p${props.id}`);   
    const id = setInterval(frame, 10);
    function frame() {
      if(width === props.percent)
      {
        clearInterval(id);
      }
      else
      {
        width++;
        elem.style.width = width + "%"; 
      }
    }
  }
  const empty = () => {
    let width = props.percent;
    const elem = document.getElementById(`p${props.id}`);   
    const id = setInterval(frame, 10);
    function frame() {
      if(width === 0)
      {
        clearInterval(id);
      }
      else
      {
        width--;
        elem.style.width = width + "%"; 
      }
    }
  }
  // myMove()

  return (
    <>
      <div className="card d-flex align-items-center flex-md-column gap-3 py-4 m-3" onMouseEnter={fill} onMouseLeave={empty}>
        <div className="progress w-75">
          <div
            className="progress-bar progress-bar-striped bg-info"
            id={`p${props.id}`}
            role="progressbar"
            aria-label="Warning striped example"
          />
        </div>
        <div className="per fs-5">{props.percent}%</div>
        <div className="skillName fs-4">{props.skillName}</div>
      </div>
    </>
  );
}
