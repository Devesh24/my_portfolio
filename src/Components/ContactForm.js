import React from "react";
import Fade from 'react-reveal/Fade';

const ContactForm = () => {
  return (
    <>
      <Fade left duration={1500}>
        <form className="cform p-1 my-3" action="https://formsubmit.co/devesh12200@gmail.com" method="POST">
          <div className="m-3">
            <input
              type="text"
              placeholder="NAME"
            />
          </div>
          <div className="m-3">
            <input
              type="email"
              placeholder="EMAIL"
            />
            <small className="form-text">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="m-3">
            <textarea
              rows="4"
              placeholder="MESSAGE"
            />
          </div>

          <button type="submit" className="btn mx-3">
            Send
          </button>
          <button type="reset" className="btn mx-3">
            Clear
          </button>
        </form>
      </Fade>
    </>
  );
};

export default ContactForm;
