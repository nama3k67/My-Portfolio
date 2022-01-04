import React from "react";

import avatar from "../../img/avatar_01.jpg";
import awardImg from "../../img/iviettech-logo.png";

import "./styles.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={avatar} alt="image_01" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <div className="a-sub">
          <code>Do what you love, and love what you do 👌</code>
        </div>
        <p className="a-desc">
          I am a Web Developer (Back-end & Front-end), but currently my focus is
          mostly on Front-end. Furthermore, I also spend time researching UI/UX
          and writing blogs.
        </p>
        <div className="a-award">
          <div className="a-award-img-wrapper">
            <img src={awardImg} alt="award_img" className="a-award-img" />
          </div>
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Graduated from FE course at IvietTech
            </h4>
            <p className="a-award-desc">
              I have graduated from the Front-end course of IVietTech center
              with the Bookworm project evaluation score of 9.5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
