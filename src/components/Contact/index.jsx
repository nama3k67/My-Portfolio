import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";

import { EMAILJS_CONFIG } from "../../data.js";
import { ThemeContext } from "../../context.js";

import "./styles.css";

const Contact = () => {
  const formRef = useRef();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://img.icons8.com/color/50/000000/phone.png"
                alt=""
                className="c-icon"
              />
              0898289926
            </div>
            <div className="c-info-item">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                alt=""
                className="c-icon"
              />
              https://github.com/nama3k67
            </div>
            <div className="c-info-item">
              <img
                src="https://img.icons8.com/fluency/48/000000/mail.png"
                alt=""
                className="c-icon"
              />
              nama3k67lnq@mail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b>Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && <p>Thank you...</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
