// import logo from './logo.svg';
// import './App.css';

import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let a = "Text Utilities";

function App() {
  const [bg_dark_style, setBgDarkStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [bg_text_box, setBgTextBox] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [dark, setDark] = useState(false);

  const [alert, setAlert] = useState(null);

  const [colorSchema, setColorSchema] = useState(null);

  const setTheme = (color) => {
    setColorSchema(true);

    if (color === "#6f0808") {
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#6f0808",
      });
    } else if (color === "#0a4c86") {
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#0a4c86",
      });
    } else if (color === "#a67f09") {
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#a67f09",
      });
    } else if (color === "#056639") {
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#056639",
      });
    } else if (color === "#5f0875") {
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#5f0875",
      });
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleStyle = () => {
    if (
      (bg_dark_style.color === "white" &&
        bg_dark_style.backgroundColor === "#082042") ||
      colorSchema === true
    ) {
      setColorSchema(null);
      setBgDarkStyle({
        color: "black",
        backgroundColor: "white",
      });
      setDark(false);
      showAlert("Light mode enabled!", "success");
    } else {
      setColorSchema(null);
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#082042",
      });
      setDark(true);
      showAlert("Dark mode enabled!", "success");
    }

    if (
      bg_text_box.color === "black" &&
      bg_text_box.backgroundColor === "white"
    ) {
      setBgTextBox({
        color: "white",
        backgroundColor: "grey",
        opacity: 0.7
      });
    } else {
      setColorSchema(null);
      setBgTextBox({
        color: "black",
        backgroundColor: "white",
      });
    }

    // setInterval(() => {
    //   document.title = "TextUtils is amazing!";
    // }, 2000);

    // setInterval(() => {
    //   document.title = "Download now!";
    // }, 3001);
  };

  return (
    <>
      <div
        style={
          Object.assign({},
            {
              height:"100vh"
          },
          bg_dark_style)
        }
      >
        <Router>
          <Navbar
            title={a}
            toggleStyle={toggleStyle}
            setTheme={setTheme}
            dark={dark}
          />
          <Alerts alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="container my-5">
                  <TextForm
                    header="Enter the text to analyze..."
                    bg_text_box={bg_text_box}
                    alert={showAlert}
                  ></TextForm>
                </div>
              }
            />
            <Route
              exact
              path="/home"
              element={
                <div className="container my-5" style={{opacity: 0}}>
                  <TextForm
                    header="Enter the text to analyze..."
                    bg_text_box={bg_text_box}
                    alert={showAlert}
                  ></TextForm>
                </div>
              }
            />
            {/* </div> */}

            <Route
              path="/about"
              element={
                <About
                  bg_text_box={bg_text_box}
                  bg_dark_style={bg_dark_style}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
