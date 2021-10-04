
import React ,{ useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text,setText] = useState("");

    const upperCase = ()=>{
        setText(text.toUpperCase());  
    }
    const lowerCase = ()=>{
        setText(text.toLowerCase());
    }
    const clearTxt = ()=>{
        setText("");
    }
  
    const handleonChange = (event)=>{
        setText(event.target.value);
        
    }
  return (
    <>
        <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea placeholder="Enter text here..." className="textarea-dark form-control" value={text} onChange={handleonChange} id="myTextArea" rows="6"></textarea>
            {/* <div className="container my-3">
                <button className="btn btn-primary" onClick={boldText}>B</button>
                <button className="btn btn-primary">I</button>
                <button className="btn btn-primary">U</button>
            </div> */}
            <button className="button1 button btn " onClick={upperCase}>Preview</button>
            <button className="button2 button btn " onClick={upperCase}>UpperCase</button>
            <button className="button3 button btn "onClick={lowerCase}>LowerCase</button>
            <button className="button4 button btn "onClick={clearTxt}>Clear</button>
        </div>
        <div className="container">
            <h3>Your Text Summery</h3>
            <p> {text.split(" ").length} Words {text.length} Character</p>
            <p> {0.008 *text.split(" ").length} minutes takes to read</p>
            <h4>Preview </h4>
            <p className="previewpara">{text}</p>
        </div>
        
    </>
  );
}

TextForm.propTypes ={
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps ={
    heading:"Heading",
}

