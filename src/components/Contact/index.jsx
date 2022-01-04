import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EMAILJS_CONFIG } from "../../data.js";
import { ThemeContext } from "../../context.js";

import "./styles.css";

const schema = yup.object({
  subject: yup.string().required("Subject is required!"),
  email: yup
    .string()
    .required("Email is required!")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email is not valid format!"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const formRef = useRef();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false);

  const onSubmit = (values) => {
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
          <h1 className="c-title">Get in touch with me!</h1>
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
                src="https://img.icons8.com/fluency/48/000000/mail.png"
                alt=""
                className="c-icon"
              />
              nama3k67lnq@mail.com
            </div>
            <div className="c-info-item">
              <img
                src="https://img.icons8.com/fluency/48/000000/github.png"
                alt=""
                className="c-icon"
              />
              https://github.com/nama3k67
            </div>
            <div className="c-info-item">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt=""
                className="c-icon"
              />
              linkedin.com/in/nam-tran-1a63861b0/
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b>Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              {...register("subject")}
            />
            <div className="error">{errors.subject?.message}</div>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
              {...register("email")}
            />
            <div className="error">{errors.email?.message}</div>
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
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
