
---

# codepunter-react-wheelpicker

A customizable React wheel picker bringing iOS-like functionality to the web! Supports extensive customization, including selected item styles, animations, and more.

<!-- [Demo](https://derrick-torkornoo.github.io/codepunter-react-wheelpicker/) -->

---

## Installation

Install the package using npm:

```bash
npm install codepunter-react-wheelpicker
```

---

## Usage

The `WheelPicker` component can be imported and used to render a highly customizable wheel-style picker.

### Import

```tsx
import WheelPicker from "codepunter-react-wheelpicker";
```

---

### Example with Functional Component

```tsx
import React, { useState } from "react";
import WheelPicker from "codepunter-react-wheelpicker";

const App: React.FC = () => {
  const data = [
    "Intro to Data Science",
    "Big Data",
    "Design and Analysis of Algorithms",
    "Operating Systems",
    "Cloud Computing",
    "Principles of Database Systems",
  ];

  const [selection, setSelection] = useState(data[3]); // Default: "Operating Systems"
  const [defaultSelection, setDefaultSelection] = useState(3);

  return (
    <div>
      <h2>Choose a subject</h2>
      <div
        className="selected"
        onClick={() => console.log("Selection clicked!")}
      >
        {selection}
      </div>
      <WheelPicker
        data={data}
        height={50}
        fontSize={16}
        parentHeight={200}
        defaultSelection={defaultSelection}
        selectedBackgroundColor="#4CAF50"
        selectedTextColor="#FFF"
        unselectedTextColor="#888"
        updateSelection={(selectedIndex) => {
          setSelection(data[selectedIndex]);
          setDefaultSelection(selectedIndex);
        }}
        scrollerId="subject-picker"
        animation="flat"
        selectedItemStyles={{
          border: "2px solid #000",
          borderRadius: "5px",
          padding: "5px",
        }}
        disableTextHighlight={true}
      />
    </div>
  );
};

export default App;
```

---

### Example with Class Component

```tsx
import React from "react";
import WheelPicker from "codepunter-react-wheelpicker";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        "Intro to Data Science",
        "Big Data",
        "Design and Analysis of Algorithms",
        "Operating Systems",
        "Cloud Computing",
        "Principles of Database Systems",
      ],
      defaultSelection: 3,
      selection: "Operating Systems",
    };
  }

  render() {
    return (
      <div>
        <h2>Choose a subject</h2>
        <div
          className="selected"
          onClick={() => console.log("Selection clicked!")}
        >
          {this.state.selection}
        </div>
        <WheelPicker
          data={this.state.data}
          height={50}
          fontSize={15}
          parentHeight={200}
          defaultSelection={this.state.defaultSelection}
          selectedBackgroundColor="#FF5722"
          selectedTextColor="#FFF"
          unselectedTextColor="#666"
          updateSelection={(selectedIndex) =>
            this.setState({
              selection: this.state.data[selectedIndex],
              defaultSelection: selectedIndex,
            })
          }
          scrollerId="subject-picker-class"
          animation="wheel"
          selectedItemStyles={{
            border: "2px dashed #673AB7",
            padding: "5px",
          }}
          disableTextHighlight={false}
        />
      </div>
    );
  }
}

export default App;
```

---

## Props

Here’s a comprehensive list of props available for the `WheelPicker`:

### **1. `scrollerId`** (String) - **Required**
A unique string identifier for the picker instance. Each picker on the page must have a unique `scrollerId`.

---

### **2. `data`** (Array of Strings) - **Required**
An array of strings used to populate the picker options.

---

### **3. `animation`** (String)
Defines the animation style for the picker. Possible values:
- `'flat'` (default)
- `'wheel'`

---

### **4. `height`** (Number)
Specifies the height of each item in the picker.

- Default: `40`

---

### **5. `parentHeight`** (Number)
Specifies the height of the picker container. Defaults to:
`(#items in data) * height`

---

### **6. `fontSize`** (Number)
The font size for the picker items.

- Default: `16`

---

### **7. `defaultSelection`** (Number)
The index of the item to be selected by default when the picker is initialized.

---

### **8. `updateSelection`** (Function)
A callback function that receives the index of the selected item. Use this to update the parent component's state.

---

### **9. `selectedBackgroundColor`** (String)
The background color for the currently selected item.

- Default: `"blue"`

---

### **10. `selectedTextColor`** (String)
The text color for the currently selected item.

- Default: `"white"`

---

### **11. `unselectedTextColor`** (String)
The text color for unselected items.

- Default: `"black"`

---

### **12. `selectedItemStyles`** (Object)
Allows you to apply custom styles (e.g., borders, shadows) to the selected item. Example:

```tsx
selectedItemStyles={{
  border: "2px solid #4CAF50",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
}}
```

---

### **13. `disableTextHighlight`** (Boolean)
If `true`, disables text selection in the picker to ensure a smoother scrolling experience.

- Default: `false`

---

## Author

**Derrick Mensah Torkornoo**  
Founder of **CodePunter IT Solutions**

---

## License

Licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## Contributing

Feel free to submit pull requests or report issues on the [GitHub Repository](https://github.com/DERRICK-TORKORNOO/codepunter-react-wheelpicker).