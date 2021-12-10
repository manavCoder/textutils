import React, {useState} from "react";

export default function TextForm(props) {
  const handleUPClick = ()=> {
    //   console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
  }
  
  const handleLOClick = ()=> {
    //   console.log("Lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
  }

  const [myFont, setmyFont] = useState({
    fontFamily: 'Times New Roman'
  })
  const handleCALClick = ()=> {
    //   console.log("Lowercase was clicked");
    if (myFont.fontFamily === 'Times New Roman') {
      setmyFont({
        fontFamily: 'Courier'
      })
    }
    
    else {
      setmyFont({
        fontFamily: 'Times New Roman'
      })
    }
  }
  
  const handleClrClick = ()=> {
    //   console.log("Lowercase was clicked");
      let newText = "";
      setText(newText);
      setmyFont({
        fontFamily: 'Times New Roman'
      })
  }
  
  const handleOnChange = (event)=> {
      console.log("On Change");
      setText(event.target.value);
  }

  const[text, setText] = useState('Enter text here');
//   text = "dsjfvnsj" // Wrong way to change the state
//   setText("Amazing text"); // Correct way to change the state
  
  return (
      <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8" 
          value = {text}
          onChange={handleOnChange}
          style={myFont}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLOClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleCALClick}>Calligraphic Font</button>
      <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
