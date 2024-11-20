import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import WheelPicker from "../../src";
import "./demo.css";

const App: React.FC = () => {
  const [picker1Open, setPicker1Open] = useState(false);
  const [picker2Open, setPicker2Open] = useState(false);

  const data = [
    "Intro to Data Science",
    "Big Data",
    "Design and Analysis of Algorithms",
    "Operating Systems",
    "Cloud Computing",
    "Principles of Database Systems",
    "Human Computer Interaction",
    "Information Security & Privacy",
    "Machine Learning",
    "Artificial Intelligence",
  ];

  const [selection1, setSelection1] = useState("Operating Systems");
  const [defaultSelection1, setDefaultSelection1] = useState(3);

  const [selection2, setSelection2] = useState("Operating Systems");
  const [defaultSelection2, setDefaultSelection2] = useState(3);

  return (
    <div className="demo-container">
      <div className="picker-container">
        <center>
          <span className="anim">animation = 'wheel'</span>
        </center>
        <br />
        <div
          className="selected"
          onClick={() => setPicker1Open(!picker1Open)}
        >
          {selection1}
        </div>
        {picker1Open && (
          <div className="picker-1">
            <WheelPicker
              data={data}
              height={50}
              fontSize={15}
              defaultSelection={defaultSelection1}
              parentHeight={150}
              updateSelection={(selectedIndex) => {
                setSelection1(data[selectedIndex]);
                setDefaultSelection1(selectedIndex);
              }}
              scrollerId="scroll-select-subject"
              animation="wheel"
            />
          </div>
        )}
      </div>
      <div className="picker-container">
        <center>
          <span className="anim">animation = 'flat'</span>
        </center>
        <br />
        <div
          className="selected"
          onClick={() => setPicker2Open(!picker2Open)}
        >
          {selection2}
        </div>
        {picker2Open && (
          <div className="picker-2">
            <WheelPicker
              data={data}
              height={50}
              fontSize={13}
              defaultSelection={defaultSelection2}
              parentHeight={250}
              updateSelection={(selectedIndex) => {
                setSelection2(data[selectedIndex]);
                setDefaultSelection2(selectedIndex);
              }}
              scrollerId="scroll-select-subject-2"
              animation="flat"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// React 18 rendering API
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot instead of render
  root.render(<App />);
}
