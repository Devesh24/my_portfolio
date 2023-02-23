import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <span className="title">
          &lt;MY_PORTFOLIO/&gt;
          </span>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#home">
                  Home
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#about">
                  About Me
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#skills">
                  Skills
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#projects">
                  Projects
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#contact">
                  Contact Me
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
