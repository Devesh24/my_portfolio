import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';

export default function SkillCard(props) {

  const [dimensions, setDimensions] = useState(window.innerWidth)

  const fill = () => {
    const elem = document.getElementById(`p${props.element.id}`);   
    let width = elem.style.strokeDashoffset
    const id = setInterval(frame, 5);
    function frame() {
      if(width <= (440 - (440 * props.element.percent)/100))
      {
        clearInterval(id);
      }
      else
      {
        width--
        elem.style.strokeDashoffset = width; 
      }
    }
  }

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth)}
    window.addEventListener('resize', handleResize)
  })
  
  const skillStyle = {
    stroke: props.element.clr,
    strokeDasharray: "440",
    strokeDashoffset: "440",
  }
  const temp = (440 - (440 * props.element.percent)/100)
  const newSkillStyle = {
    stroke: props.element.clr,
    strokeDasharray: "440",
    strokeDashoffset: `${temp}`,
  }

  
  return (
    <>
      <Fade right duration={1500}>
        <div className="cardContainer" onMouseEnter={fill}>
          <div className="card">
            <div className="cardFront" style={{color: props.element.clr}}>{props.element.skillName}</div>
            <div className="percent">
              <svg>
                <circle cx={70} cy={70} r={70}></circle>
                <circle cx={70} cy={70} r={70} style={dimensions>=800 ? skillStyle : newSkillStyle} id={`p${props.element.id}`}></circle>
              </svg>
              <div className="number">
                <h2>{props.element.percent}<span>%</span></h2>
                <div>{props.element.skillName}</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
