import "./App.css";
import { Buttons } from "./component/Buttons";
import { Display } from "./component/Display";
import { Title } from "./component/Title";
import { useState } from "react";
const operator = ["-", "+", "*", "/"];
function App() {
  const [textToDisplay, setTextToDisplay] = useState("");

  const handleOnClick = (val) => {
    // Doesn't let the input to start with zero
    if (textToDisplay === "" && val === "0") return;
    // Checking the first numbers after the operator is 0
    if (
      textToDisplay &&
      operator.includes(textToDisplay[textToDisplay.length - 1]) &&
      val === "0"
    ) {
      return setTextToDisplay(textToDisplay);
    }

    // Excludes double operators
    if (
      operator.includes(textToDisplay[textToDisplay.length - 1]) &&
      operator.includes(val)
    ) {
      return setTextToDisplay(textToDisplay.slice(0, -1) + val);
    }

    // // Case for AC and C and  =
    if (val === "=") {
      return sum(textToDisplay);
    }
    if (val === "AC") {
      return setTextToDisplay("");
    }
    if (val === "C") {
      const str = textToDisplay.slice(0, -1);
      return setTextToDisplay(str);
    }

    // // Conacat the value in the display
    setTextToDisplay(textToDisplay + val);
  };

  const sum = (textToDisplay) => {
    let check = "";
    // if (textToDisplay[0] === "0") check = textToDisplay.splice(1);

    setTextToDisplay(eval(textToDisplay));
    textToDisplay = "";
  };
  return (
    <div className="wrapper">
      <Title />

      <div className="mainParent">
        <Display textToDisplay={textToDisplay} />
        <Buttons handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

export default App;
