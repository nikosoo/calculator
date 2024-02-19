import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  var [text, setText] = useState("");
  function showNums(event) {
    setText((text) => text + event.target.value);
  }

  function deleteText() {
    setText((text) => (text = ""));
  }

  function calculate() {
    const result = eval(text);
    setText(result.toString());
  }

  function percent() {
    setText((text) => text / 100);
  }

  return (
    <>
      <h1 class="title">Calculator Project</h1>
      <div id="calculator">
        <input type="text" id="display" readOnly value={text} />
        <br />
        <input type="button" value="7" onClick={showNums} />
        <input type="button" value="8" onClick={showNums} />
        <input type="button" value="9" onClick={showNums} />
        <input type="button" value="/" onClick={showNums} />
        <br />
        <input type="button" value="4" onClick={showNums} />
        <input type="button" value="5" onClick={showNums} />
        <input type="button" value="6" onClick={showNums} />
        <input type="button" value="*" onClick={showNums} />
        <br />
        <input type="button" value="1" onClick={showNums} />
        <input type="button" value="2" onClick={showNums} />
        <input type="button" value="3" onClick={showNums} />
        <input type="button" value="-" onClick={showNums} />
        <br />
        <input type="button" value="0" onClick={showNums} />
        <input type="button" value="." onClick={showNums} />
        <input type="button" value="C" onClick={deleteText} />
        <input type="button" value="+" onClick={showNums} />
        <br />
        <input type="button" id="equals" value="=" onClick={calculate} />
        <input type="button" value="%" onClick={percent} />
      </div>
    </>
  );
}
export default App;
