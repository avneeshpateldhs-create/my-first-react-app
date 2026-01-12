import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleMode = () => {
    if (myStyle.backgroundColor === "black") {
      // Light mode
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });
      setBtnText("Enable Dark Mode");
    } else {
      // Dark mode
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container my-3">
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        
        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
                style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item’s accordion body.</strong>
              <br />
              React dark/light mode using useState.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
               style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item’s accordion body.</strong>
              <br />
              Toggle theme without page reload.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
               style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item’s accordion body.</strong>
              <br />
              Clean & simple theme switcher.
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary my-3" onClick={toggleMode}>
        {btnText}
      </button>
    </div>
  );
}
