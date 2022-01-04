import React, { useContext } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";

import { ThemeContext } from "./context";

import "./App.css";

function App() {
  document.title = "My Portfolio";
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;