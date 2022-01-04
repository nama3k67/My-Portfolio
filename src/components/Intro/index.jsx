import React, { useContext } from "react";

import avatar from "../../img/avatar.png";
import { ThemeContext } from "../../context";

import "./styles.css";

const Intro = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name">Nam Tran</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Blogger</div>
            </div>
          </div>
          <p className="i-desc">
            I am a passionate web developer (BE & FE). In addition, in order to
            create the best products for customers, I always challenge myself in
            other areas such as UI/UX, or blogging,...
            <p style={{ marginTop: 10 }}>Nice to meet you 😁</p>
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          fill={theme.state.darkMode ? "white" : "black"}
          stroke="black"
          viewBox="0 0 75 75"
          className="i-scroll"
        >
          <defs></defs>
          <title>Asset 13</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M47.09,19.72a23.38,23.38,0,0,0-46.19,0,84.16,84.16,0,0,0,0,24.55,23.38,23.38,0,0,0,46.19,0A84.16,84.16,0,0,0,47.09,19.72ZM6.18,20.5a18.05,18.05,0,0,1,35.64,0,79.22,79.22,0,0,1,.37,19.58c-.09,0-.17,0-.26,0a64.35,64.35,0,0,1-35.87,0c-.09,0-.17,0-.26,0A78.73,78.73,0,0,1,6.18,20.5ZM24,58.67A18.08,18.08,0,0,1,6.68,45.75,69.76,69.76,0,0,0,24,48a69.75,69.75,0,0,0,17.31-2.24A18.06,18.06,0,0,1,24,58.67Z"
              />
              <path
                class="cls-1"
                d="M24,29.33a2.66,2.66,0,0,0,2.66-2.66V16a2.67,2.67,0,1,0-5.33,0V26.67A2.66,2.66,0,0,0,24,29.33Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <di className="i-bg" />
        <img src={avatar} alt="avatar" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
