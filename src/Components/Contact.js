import React from "react";

export default function Contact() {
  return (
    <>
      <div className="d-flex flex-md-column pt-5" id="contact">
        <h1 className="mb-4 ms-5 heading">&lt;Contact Me&gt;</h1>
        <div className="d-flex justify-content-around flex-wrap">

          <form className="cform border p-1">
            <div className="form-group m-3">
              <label htmlFor="exampleInputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="exampleInputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group m-3">
              <label htmlFor="exampleInputMessage">Message</label>
              <textarea
                rows="4"
                className="form-control"
                id="exampleInputMessage"
                placeholder="Enter Message"
              />
            </div>

            <button type="submit" className="btn btn-info mx-3">
              Send
            </button>
          </form>

          <div className="sidebar border">
            <ul className="navbar-nav">
              <li>
                Email: <i className="data">devesh25.ugec20@iiitranchi.ac.in</i>
              </li>
              <li>
                Phone: <i className="data">+91-8516029236</i>
              </li>
              <li>
                Permanent Address:
                <i className="data">
                  H.No. 813, Tagore Ward, Gandhi Nagar, Bhopal, Madhya Pradesh -
                  462036
                </i>
              </li>
              <li>
                Current Address:
                <i className="data">
                  Indian Institute of Information Technology Ranchi, Jharkhand
                </i>
              </li>
              <li>
                Socials:
                <div className="d-flex mt-2">
                  <a
                    className="btn btn-primary mx-4"
                    href="https://twitter.com/Devesh240301"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark mx-4"
                    href="https://github.com/Devesh24"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    className="btn btn-primary mx-4"
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

        </div>
        <h1 className="pb-3 ms-5 mt-4 heading">&lt;/Contact Me&gt;</h1>
      </div>
    </>
  );
}
