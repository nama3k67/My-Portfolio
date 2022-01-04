import React, { useContext } from "react";

import sunImg from "../../img/sun.png";
import moonImg from "../../img/moon.png";

import "./styles.css";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={sunImg} alt="sun_img" className="t-icon" />
      <img
        src={moonImg}
        alt="moon_img"
        className="t-icon"
        style={{ width: 25, height: 25 }}
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 30 }}
      ></div>
    </div>
  );
};

export default Toggle;
