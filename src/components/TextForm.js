import React, {useState} from "react";

export default function TextForm(props) {
  const handleUPClick = ()=> {
      console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
  }
  
  const handleOnChange = (event)=> {
      console.log("On Change");
      setText(event.target.value);
  }
  const[text, setText] = useState('Enter text here');
//   text = "dsjfvnsj" // Wrong way to change the state
//   setText("Amazing text"); // Correct way to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8" 
          value = {text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPClick}>Convert to Uppercase</button>
    </div>
  );
}
