import React from "react";
import ContactForm from "./ContactForm";
import Info from "./Info";


export default function Contact() {
  return (
    <>
      <div className="d-flex flex-md-column app py-5" id="contact">
        <h1 className="mb-4 heading">&lt;Contact Me&gt;</h1>
        
        <div className="d-flex justify-content-around flex-wrap">
          <ContactForm />
          <Info />
        </div>

        <h1 className="mt-5 heading">&lt;/Contact Me&gt;</h1>
      </div>
    </>
  );
}
