import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import WheelPicker from "../../src";
import "./demo.css";

const App: React.FC = () => {
  const [picker1Open, setPicker1Open] = useState(false);
  const [picker2Open, setPicker2Open] = useState(false);
  const [picker3Open, setPicker3Open] = useState(false);

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

  const [selection2, setSelection2] = useState("Cloud Computing");
  const [defaultSelection2, setDefaultSelection2] = useState(4);

  const [selection3, setSelection3] = useState("Machine Learning");
  const [defaultSelection3, setDefaultSelection3] = useState(8);

  return (
    <div className="demo-container">
      <h1 className="header">WheelPicker Demo</h1>
      <p className="description">
        Explore different configurations and styles of the WheelPicker component.
      </p>

      {/* Picker with Wheel Animation */}
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
              selectedItemStyles={{
                border: "2px solid #4CAF50",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
              disableTextHighlight={true}
            />
          </div>
        )}
      </div>

      {/* Picker with Flat Animation */}
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
              parentHeight={200}
              updateSelection={(selectedIndex) => {
                setSelection2(data[selectedIndex]);
                setDefaultSelection2(selectedIndex);
              }}
              scrollerId="scroll-select-subject-2"
              animation="flat"
              selectedBackgroundColor="#FF5722"
              selectedTextColor="#FFF"
              unselectedTextColor="#888"
              disableTextHighlight={false}
            />
          </div>
        )}
      </div>

      {/* Picker with Custom Styles */}
      <div className="picker-container">
        <center>
          <span className="anim">Custom Styles</span>
        </center>
        <br />
        <div
          className="selected"
          onClick={() => setPicker3Open(!picker3Open)}
        >
          {selection3}
        </div>
        {picker3Open && (
          <div className="picker-3">
            <WheelPicker
              data={data}
              height={60}
              fontSize={16}
              defaultSelection={defaultSelection3}
              parentHeight={180}
              updateSelection={(selectedIndex) => {
                setSelection3(data[selectedIndex]);
                setDefaultSelection3(selectedIndex);
              }}
              scrollerId="scroll-select-subject-3"
              animation="wheel"
              selectedItemStyles={{
                border: "3px dashed #673AB7",
                borderRadius: "8px",
                backgroundColor: "#EDE7F6",
              }}
              disableTextHighlight={true}
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
