import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "./Navbar";
import Fade from 'react-reveal/Fade';

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Developer", "Competitive Programmer", "Coder"],
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main">
        <Navbar />
        <div
          className="app d-flex align-items-center"
          id="home"
        >
          <div className="info">
            <div className="d-flex justify-content-around">
              <div className="infoIn">
                <Fade left duration={1500}>
                  <div className="intro">Hey, I am</div>
                  <div className="name">
                    <span className="fname">Devesh</span> Singh Raghuvanshi
                  </div>
                  <div className="prof">
                    and I am a <span className="work" ref={el}></span>
                  </div>
                </Fade>
              </div>
            </div>
            <Fade bottom duration={1500}>
              <div>
                <a
                  href="https://drive.google.com/file/d/1vsFRy9uzLPrH9yf9HdcbHcv2fKT5wl_g/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button title="Download Resume" className="btn p-1 mt-4">
                    <i className="fa-solid fa-download"></i>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/devesh-raghuvanshi-624040239"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button title="Linkedin" className="btn p-1 mt-4">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                </a>
                <a
                  href="https://github.com/Devesh24"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button title="Github" className="btn p-1 mt-4">
                    <i className="fa-brands fa-github"></i>
                  </button>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
