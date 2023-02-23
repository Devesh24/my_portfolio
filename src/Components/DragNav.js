import {useState} from "react";
import './drag.css'

const DragNav = () => {

  const [newClass, setNewClass] = useState("")
  
  const toggleBtn = () => {
    if(newClass === "")
    {
      setNewClass("open")
      for(let i=2; i<=6; i++)
      {
        const child = document.querySelector(`.nav-content :nth-child(${i})`);
        child.style.transform = `rotate(calc(${6-i+1} * (360deg/8))) translateY(120px)`

        const child1 = document.querySelector(`.nav-content :nth-child(${i}) i`);
        child1.style.transform = `rotate(calc(${6-i} * (360deg/ -8)))`
      }
    }
    else 
    {
      setNewClass("")
      for(let i=2; i<=6; i++)
      {
        const child = document.querySelector(`.nav-content :nth-child(${i})`);
        child.style.transform = `rotate(calc(${6-i+1} * (360deg/8))) translateY(120px)`
        child.style.transform = `rotate(calc(${6-i+1} * (360deg/ -8)))`
      }
    }
  }

  return (
    <>
      <nav className={`dragNav ${newClass}`}>
        <div className="nav-content">
          <div className="toggle-btn" onClick={toggleBtn}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <span title="Home">
            <a href="#home">
                <i className="fa-solid fa-house"></i>
            </a>
          </span>
          <span title="About">
            <a href="#about">
                <i className="fa-solid fa-user"></i>
            </a>
          </span>
          <span title="Skills">
            <a href="#skills">
                <i className="fa-solid fa-lightbulb"></i>
            </a>
          </span>
          <span title="Projects">
            <a href="#projects">
                <i className="fa-solid fa-clipboard"></i>
            </a>
          </span>
          <span title="Contact Me">
            <a href="#contact">
                <i className="fa-solid fa-phone"></i>
            </a>
          </span>
        </div>
      </nav>
    </>
  );
};

export default DragNav;
