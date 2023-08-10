import React, { useState } from 'react'

export default function TextForm(props) {
    function handleOnChange(event) {
        setText(event.target.value);
    }
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleLowClick() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function handleClrClick() {
        setText("");
    }
    function handleNormClick() {
        let newText = text.toLowerCase().replace(/\b\w/g, function cap(char) {
            return char.toUpperCase();
        });
        setText(newText);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-1" data-bs-theme={props.mode}>
                <h1 className='my-4' style={{ backgroundColor: 'black', padding: '0.5rem', color: 'white', border: '0px solid black', borderRadius: '1rem', textAlign: 'center' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea placeholder='Enter text here' onChange={handleOnChange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled={text.length <= 0} onClick={handleUpClick} className="btn btn-outline-primary mx-1 my-1">Convert to uppercase</button>
                <button disabled={text.length <= 0} onClick={handleLowClick} className="btn btn-outline-primary mx-1 my-1">Convert to lowercase</button>
                <button disabled={text.length <= 0} onClick={handleNormClick} className="btn btn-outline-primary mx-1 my-1">Normalize</button>
                <button disabled={text.length <= 0} onClick={handleClrClick} className="btn btn-outline-primary mx-1 my-1">Clear</button>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter(function (element) { return element.length !== 0 }).length} words , {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter(function (element) { return element.length !== 0 }).length} minute's read</p >
            </div>
            <div className="container">
                <h2>Preview here: </h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: "Default Heading"
}