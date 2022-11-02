import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import pro from "./profile.png";
import resume from "./Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      <div
        className="app d-flex justify-content-around align-items-center"
        id="home"
      >
          <div className="info p-4">
        <div className="d-flex justify-content-around">
          <div className="infoIn">
            <div className="intro">Hey, I am</div>
            <div className="name">
              <span className="fname">Devesh</span> Singh Raghuvanshi
            </div>
            <div className="prof">
              and I am a <span className="work" ref={el}></span>
            </div>
            </div>
        </div>
            <a href={resume} target="_blank" rel="noreferrer">
              <button className="btn btn-info p-2 mt-4 mx-3">
                Downlaod CV
              </button>
            </a>
            <AnchorLink href="#contact">
              <button className="btn btn-info p-2 mt-4 mx-3">
                Connect With Me
              </button>
            </AnchorLink>
          </div>
        <img className="homePic" src={pro} alt="Profile Pic" width={"30%"} />
      </div>
    </>
  );
}
