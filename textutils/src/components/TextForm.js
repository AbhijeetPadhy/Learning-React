import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  // text = "hello"; // wrong way to set text
  // setText("hello"); // correct way to set text

  const handleUpClick = () => {
    console.log("UpperCase was Clicked!");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    console.log("UpperCase was Clicked!");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("TextArea was Changed!");
    setText(event.target.value);
  }
  const handleCopy = (event) => {
    console.log("Copying text to clipboard!");
    navigator.clipboard.writeText(text);
  }
  const handleExtraSpaces = (event) => {
    console.log("Removing extra spaces!");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} />
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    
  )
}
