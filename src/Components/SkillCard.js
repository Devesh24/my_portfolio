import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';

export default function SkillCard(props) {
  return (
    <>
      <Fade right duration={1500}>
        <div className="cardContainer">
          <div className="card">
            <div className="cardFront">
              <img src={props.element.photo} alt="" />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
