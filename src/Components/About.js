import React from "react";
import pro from "./photos/devesh2.jpg";
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <>
      <div className="d-flex flex-column app py-5" id="about">
        <h1 className="heading heading-top">&lt;About Me&gt;</h1>
        <div
          className="d-flex justify-content-around align-items-center flex-wrap"
        >
          <Fade left duration={1500}>
          <div className="col-lg-3 imgbox">
            <div className="div-img-bg">
              <div className="about-img"> 
                <img src={pro} alt="Profile Pic" width={"80%"} />
              </div>
            </div>
          </div>
          </Fade>
          <Fade right duration={1500}>
          <div className="about py-4">
            <div className="topIntro">I am Devesh Singh Raghuvanshi, proefficient in Data Structures & Algorithms and have a strong problem solving skills.</div>
            <div>My Birthplace is Bhopal, Madhya Pradesh and I am currently a B.Tech Final year student at Indian Institute of Information Technology (IIIT) Ranchi specialising in Electronics and Communication Engineering.</div>
            <div>I am an enthusiastic team player, a fast learner with creative problem-solving skills and good communication skills. I do have an experience in MERN-Stack Development and Competitive Programming. I am a huge fan of Cricket and also love to play Chess during spare times.</div>
            <div>Please do consider visiting some of my Coding Profiles: </div>
            <div className="codingProfiles">
              <a className="profilebtn" href="https://leetcode.com/Devesh2403/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="Leetcode" title="Leetcode"/>
              </a>
              <a className="profilebtn" href="https://auth.geeksforgeeks.org/user/devesh2403/" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/color/48/null/GeeksforGeeks.png" alt="Geeks For Geeks" title="Geeks For Geeks"/>
              </a>
              <a className="profilebtn" href="https://www.codechef.com/users/devesh_2403" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios/50/null/codechef.png" alt="Codechef" title="Codechef"/>
              </a>
              <a className="profilebtn" href="https://codeforces.com/profile/devesh_2403" target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png" alt="Codeforces" title="Codeforces"/>
              </a>
            </div>
          </div>
          </Fade>
        </div>
        <h1 className="heading heading-bottom">&lt;/About Me&gt;</h1>
      </div>
    </>
  );
}