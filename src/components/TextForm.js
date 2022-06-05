import React, { useState } from "react";

let text_area_style = {
  height: "177px",
};

const styles_biu = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [selected_text, set_selected] = useState("");
  const [action, set_action] = useState("");
  const [text_style, set_text_style] = useState("");
  const [bold_button_text, set_bold_text] = useState("ToBold");
  const reading_per_word = 0.08;

  const speak = () => {
    props.alert("Its speaking now!", "warning");
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const to_upper = () => {
    // console.log("Upper case was clicked!");
    props.alert("Converted to upper case!", "success");
    set_action("To Upper case");
    var selected = window.getSelection().toString();
    set_selected(selected);

    if (selected === "") {
      let newText = text.toUpperCase();
      setText(newText);
    } else {
      let newText = text.replace(selected, selected.toUpperCase());
      setText(newText);
    }
  };

  const copyText = () => {
    props.alert("Text copied!", "success");
    var element = document.getElementById("floatingTextarea");
    var text = element.value;
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    props.alert("Text cleared!", "danger");
    setText("");
  };

  const to_lower = () => {
    props.alert("Converted to lower case!", "primary");

    set_action("To Lower case");
    var selected = window.getSelection().toString();
    set_selected(selected);

    if (selected === "") {
      let newText = text.toLowerCase();
      setText(newText);
    } else {
      let newText = text.replace(selected, selected.toLowerCase());
      setText(newText);
    }
  };

  const to_bold = () => {
    //   var selected = window.getSelection().toString()
    //   set_selected(selected)
    //   let bold_text = text.replace(selected, "<b>"+selected_text+"</b>")
    //   console.log()

    //Gets the value for bold formatting of selected text.
    // let bold = documenteditor.selection.characterFormat.bold;
    // //Sets bold formatting for selected text.
    // documenteditor.selection.characterFormat.bold = true;
    if (bold_button_text === "ToBold") {
      props.alert("Text bolded!", "primary");

      set_text_style("bold");
      set_action("To bold");
      set_bold_text("UnBold");
    } else if (bold_button_text === "UnBold") {
      props.alert("Text unbolded!", "primary");

      set_text_style("");
      set_action("Unbold");
      set_bold_text("ToBold");
    }
  };

  const handle_on_change = (event) => {
    // console.log("on change");
    setText(event.target.value);
    console.log("SELECTED = " + selected_text);
  };
  return (
    <>
      <div>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea"
            style={Object.assign(
              {},
              text_area_style,
              styles_biu[text_style],
              props.bg_text_box
            )}
            onChange={handle_on_change}
            // placeholder = {props.header}
            value={text}
          ></textarea>
          <label
            htmlFor="floatingTextarea"
            className="mb-1"
            style={{ opacity: 0.1 }}
          >
            {props.header}
          </label>
        </div>
        <div className="container">
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2"
            onClick={to_upper}
          >
            ToUpper
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2"
            onClick={to_lower}
          >
            ToLower
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-1"
            onClick={to_bold}
          >
            {bold_button_text}
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2"
            onClick={copyText}
          >
            copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-2 mx-2"
            onClick={clearText}
          >
            clear
          </button>
          <button
            disabled={text.length === 0}
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-2 my-2"
          >
            Speak
          </button>
        </div>

        <div className="container my-3">
          <h3>
            <u>Your text summary:</u>
          </h3>
          <p>
            Your text has <strong>{text.length}</strong> characters and{" "}
            <strong>
              {
                text.split(/\s+|\n/).filter((element) => {
                  return element !== "";
                }).length
              }
            </strong>{" "}
            words..
          </p>
          <p>
            <b>Action on text: </b>
            {action}
          </p>
          <p>
            <strong>
              {reading_per_word *
                text.split(" ").filter((element) => {
                  return element !== "";
                }).length}{" "}
              minutes
            </strong>{" "}
            read
          </p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? `${text.slice(0, 200)}...`
              : "nothing to preview!"}
          </p>
        </div>
      </div>
    </>
  );
}
