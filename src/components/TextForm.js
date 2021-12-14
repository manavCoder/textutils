import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPClick = () => {
    //   console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLOClick = () => {
    //   console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  // const [myFont, setmyFont] = useState({
  //   fontFamily: "Times New Roman",
  // });
  // const handleCALClick = () => {
  //   //   console.log("Lowercase was clicked");
  //   if (myFont.fontFamily === "Times New Roman") {
  //     setmyFont({
  //       fontFamily: "Courier",
  //     });
  //   } else {
  //     setmyFont({
  //       fontFamily: "Times New Roman",
  //     });
  //   }
  // };

  const handleClrClick = () => {
    //   console.log("Lowercase was clicked");
    let newText = "";
    setText(newText);
    // setmyFont({
    //   fontFamily: "Times New Roman",
    // });
    props.showAlert("Text Cleared!", "success");

  };

  const handleCopyClick = () => {
    let textCopy = document.getElementById('myBox');
    textCopy.select();
    // textCopy.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textCopy.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!", "success");

  };

  const handleRemExtSpacesClick = () => {
    // let textCorrect = document.getElementById('myBox');
    let textToWordsArr = text.split(/[ ]+/);  // Splitting into an array
    setText(textToWordsArr.join(" ")); // Joining the elements of the array with one space b/w 2 words and setting the text by usnig setText-useState   
    props.showAlert("Extra Spaces Removed!", "success");

  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "dsjfvnsj" // Wrong way to change the state
  //   setText("Amazing text"); // Correct way to change the state

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLOClick}>
          Convert to Lowercase
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCALClick}>
          Calligraphic Font
        </button> */}
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClrClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleRemExtSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
