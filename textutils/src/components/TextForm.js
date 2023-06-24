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
  const handleOnChange = (event) => {
    console.log("TextArea was Changed!");
    setText(event.target.value);
  }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange} />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
