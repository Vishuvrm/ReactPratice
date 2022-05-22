// import logo from './logo.svg';
// import './App.css';

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";

let a = "Text Utilities";

function App() {

  const [bg_dark_style, setBgDarkStyle] = useState({
                                                      color: "black",
                                                      backgroundColor: "white",
                                                    });
  const [bg_text_box, setBgTextBox] = useState(
                                                {
                                                  color: "black",
                                                  backgroundColor: "white",
                                                });

  const toggleStyle = () => {
    if(bg_dark_style.color === "white" && bg_dark_style.backgroundColor === "black")
    {
      setBgDarkStyle({
        color: "black",
        backgroundColor: "white"
      })
    }
    else{
      setBgDarkStyle({
        color: "white",
        backgroundColor: "black"
      })
    }

    if(bg_text_box.color === "black" && bg_text_box.backgroundColor === "white")
    {
      setBgTextBox({
        color: "black",
        backgroundColor: "grey"
      })
    }
    else{
      setBgTextBox({
        color: "black",
        backgroundColor: "white"
      })
    }
  }

  return (
    <>
      <div style={bg_dark_style}>
        <Navbar title={a} />
        <div className="container my-5">
          <div className="form-check form-switch my-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleStyle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable dark mode
            </label>
          </div>
          <TextForm
            header="Enter the text to analyze..."
            bg_text_box={bg_text_box}
          />
        </div>
        <About bg_text_box={bg_text_box} bg_dark_style={bg_dark_style} />
      </div>
    </>
  );
}

export default App;
