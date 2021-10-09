
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    let myTextArea = document.getElementById("myTextArea");
    const [text, setText] = useState("");
    const [copy, setCopy] = useState("Copy");

    const preview = () => {
        document.getElementById("accordianPrev").click();
        props.showAlert("Preview is Visible just Scroll Down","success")
    }
    const upperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success")
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success")
    }
    const clearTxt = () => {
        setText("");
        props.showAlert("The Screen is Clear Now","danger")
    }

    const handleonChange = (event) => {
        setText(event.target.value);
    }
    
    const copyTxt = () => {
        navigator.clipboard.writeText(myTextArea.value);
        setCopy("Copied")
        props.showAlert("Text Copied","success")
        setTimeout(() => {
            setCopy("Copy")
        }, 1000);
    }

    const removeSpace = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.showAlert("All Extra Spaces Removed","success");
      }
    return (
        <>
            <div className="mb-3 container">
                <h3>{props.heading}</h3>
                <textarea placeholder="Enter text here..." className={`${props.textAreatheme} form-control`} value={text} onChange={handleonChange} id="myTextArea" rows="8"></textarea>

                <div className="button-box">
                    <button disabled={text.length===0} className={`button1 button btn`} onClick={preview}>Preview</button>
                    <button disabled={text.length===0} className={`button2 button btn`} onClick={upperCase}>UpperCase</button>
                    <button disabled={text.length===0} className={`button3 button btn`} onClick={lowerCase}>LowerCase</button>
                    <button disabled={text.length===0} className={`button4 button btn`} onClick={clearTxt}>Clear</button>
                    <button disabled={text.length===0} className={`button5 button btn`} onClick={copyTxt}>{copy}</button>
                    <button disabled={text.length===0} className={`button6 button btn`} onClick={removeSpace}>SpaceRemove</button>
                </div>
            </div>
            <div className="container">
                <h3>Your Text Summery</h3>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Words {text.length} Character</p>
                <p> {0.008 * text.split(" ").length} minutes takes to read</p>
                <div className={`${props.theme}`} id="accordionExample">
                    <h2 className="accordion-header" id="headingTwo">
                        <button id="accordianPrev" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Preview
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">{text}</div>
                    </div>
                </div>
            </div>

        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: "Heading",
}

