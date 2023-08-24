import React from "react";
import Fade from 'react-reveal/Fade';

const Info = () => {
  return (
    <>
      <Fade right duration={1500}>
        <div className="sidebar p-3">
          <ul className="conRight">
            <li>
              Email: <span className="data">deveshraghuvanshi484@gmail.com</span>
            </li>
            <li>
              Phone: <span className="data">+91-8516029236</span>
            </li>
            <li>
              Permanent Address:
              <div className="data">
                H.No. 813, Tagore Ward, Gandhi Nagar, Bhopal, Madhya Pradesh -
                462036
              </div>
            </li>
            <li>
              Current Address:
              <div className="data">
                Indian Institute of Information Technology (IIIT) Ranchi, Jharkhand
              </div>
            </li>
            <li>
              Socials:
              <div className="d-flex mt-2">
                <a
                  title="Twitter"
                  className="btn btn-primary mx-3"
                  href="https://twitter.com/Devesh240301"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  title="Github"
                  className="btn btn-dark mx-3"
                  href="https://github.com/Devesh24"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  title="Linkedin"
                  className="btn btn-primary mx-3"
                  href="https://www.linkedin.com/in/devesh-raghuvanshi-624040239"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Fade>
    </>
  );
};

export default Info;
