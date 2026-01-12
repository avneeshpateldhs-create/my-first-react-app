import React , { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const seprateWithDash = ()=>{
        // console.log("Dash Clicked");
        let newText = text.split(/[ _]/).join("-");
        setText(newText);
    }

    const seprateWithUnderscore = ()=>{
        // console.log("Underscore Clicked");
        let newText = text.split(/[ -]/).join("_");
        setText(newText);
    }

    const clearText = ()=>{
        // console.log("Clear Clicked");
        let newText = "";
        setText(newText);
    }



    const [text, setText] = useState("hi guies, i am avneesh");
    return (
        <>
            <div>
                <div className="mb-3">
                    <h3>{props.lable}</h3>
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} id="my-textarea" rows="3" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert To Lovercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={seprateWithDash}>Seprate With Dash(-)</button>
                <button className="btn btn-primary mx-1 my-2" onClick={seprateWithUnderscore}>Seprate With Underscore(_)</button>
                <button className="btn btn-primary mx-1 my-2" onClick={clearText}>Clear</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p> {text.split(" ").length} words and {text.length} character</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
