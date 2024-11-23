# codepunter-react-wheelpicker

A customizable React wheel picker bringing iOS-like functionality to the web! Supports customization of selected item styles and more.

[Demo](https://derrick-torkornoo.github.io/codepunter-react-wheelpicker/)

---

## Installation

```bash
npm install codepunter-react-wheelpicker
```

---

## Usage

The component imported is called **`WheelPicker`**.

To use the component, import it at the top of your file and use `<WheelPicker />` to render the picker.

---

### Import:

```jsx
import WheelPicker from 'codepunter-react-wheelpicker';
```

---

### Example with a Functional Component:

```tsx
import React, { useState } from 'react';
import WheelPicker from 'codepunter-react-wheelpicker';

const App: React.FC = () => {
  const [picker, setPicker] = useState({
    pickerOpen: false,
    data: [
      'Intro to Data Science',
      'Big Data',
      'Design and Analysis of Algorithms',
      'Operating Systems',
      'Cloud Computing',
      'Principles of Database Systems',
    ],
    defaultSelection: 3,
    selection: 'Big Data',
  });

  return (
    <div>
      <div
        className="selected"
        onClick={() => setPicker({ ...picker, pickerOpen: !picker.pickerOpen })}
      >
        {picker.selection}
      </div>
      {picker.pickerOpen && (
        <WheelPicker
          animation="flat"
          data={picker.data}
          height={40}
          parentHeight={250}
          fontSize={18}
          defaultSelection={picker.defaultSelection}
          selectedBackgroundColor="blue"
          selectedTextColor="white"
          unselectedTextColor="gray"
          updateSelection={(selectedIndex) =>
            setPicker({
              ...picker,
              selection: picker.data[selectedIndex],
              defaultSelection: selectedIndex,
            })
          }
          scrollerId="scroll-select-subject"
        />
      )}
    </div>
  );
};

export default App;
```

---

### Example with a Class Component:

```tsx
import React from 'react';
import WheelPicker from 'codepunter-react-wheelpicker';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pickerOpen: false,
      data: [
        'Intro to Data Science',
        'Big Data',
        'Design and Analysis of Algorithms',
        'Operating Systems',
        'Cloud Computing',
        'Principles of Database Systems',
      ],
      defaultSelection: 3,
      selection: 'Big Data',
    };
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="selected"
          onClick={() =>
            this.setState({ pickerOpen: !this.state.pickerOpen })
          }
        >
          {this.state.selection}
        </div>
        {this.state.pickerOpen && (
          <WheelPicker
            animation="wheel"
            data={this.state.data}
            height={40}
            parentHeight={250}
            fontSize={15}
            selectedBackgroundColor="green"
            selectedTextColor="white"
            unselectedTextColor="black"
            defaultSelection={this.state.defaultSelection}
            updateSelection={(selectedIndex) =>
              this.setState({
                selection: this.state.data[selectedIndex],
                defaultSelection: selectedIndex,
              })
            }
            scrollerId="scroll-select-subject"
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
```

---

## Props

### **1. `scrollerId`** (String) - **Required**
A unique string to identify the `WheelPicker`. Each picker on the page must have a unique `scrollerId`.

---

### **2. `data`** (Array of Strings) - **Required**
An array of strings used to render picker options.

---

### **3. `animation`** (String)
Animation style for the picker. Possible values:

- `'flat'`
- `'wheel'`

- If `animation="wheel"`, the `height` is automatically set to `40`.

---

### **4. `height`** (Number)
Defines the height of a single picker option.

- Default: `40`

---

### **5. `parentHeight`** (Number)
Defines the height of the entire picker list.

- Default: `(#items in data) * height`
- Example: For `10` items and `height=50`, `parentHeight = 10 * 50 = 500`.

---

### **6. `defaultSelection`** (Number)
The index of the element selected by default when the picker is rendered.

---

### **7. `updateSelection`** (Function)
Receives the selected index, which can be used to update the state of the parent component.

---

### **8. `fontSize`** (Number)
The font size of the list elements.

- Default: `16`

---

### **9. `selectedBackgroundColor`** (String)
Defines the background color of the currently selected item.

- Default: `"blue"`

---

### **10. `selectedTextColor`** (String)
Defines the text color of the currently selected item.

- Default: `"white"`

---

### **11. `unselectedTextColor`** (String)
Defines the text color of items that are not selected.

- Default: `"black"`

---

## Author

**Derrick Mensah Torkornoo**  
Founder of **CodePunter IT Solutions**

---

## License

Licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## Contributing

Feel free to submit pull requests or issues at the [GitHub Repository](https://github.com/DERRICK-TORKORNOO/codepunter-react-wheelpicker).

