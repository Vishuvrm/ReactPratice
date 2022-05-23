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
    if(bg_dark_style.color === "white" && bg_dark_style.backgroundColor === "#082042")
    {
      setBgDarkStyle({
        color: "black",
        backgroundColor: "white"
      })
    }
    else{
      setBgDarkStyle({
        color: "white",
        backgroundColor: "#082042"
      })
    }

    if(bg_text_box.color === "black" && bg_text_box.backgroundColor === "white")
    {
      setBgTextBox({
        color: "white",
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
        <Navbar title={a} toggleStyle={toggleStyle}/>
        <div className="container my-5">
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
