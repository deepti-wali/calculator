// import React, { useState } from "react";
import "./Calculator.css";

// const Calculator = () => {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");

//   const handleClick = (value) => {
//     setInput((prevInput) => prevInput + value);
//   };

//   const handleReset = () => {
//     setInput("");
//     setOutput("");
//   };

//   const handleEvaluate = () => {
//     try {
//       const result = eval(input);
//       setOutput(`${result}`);
//     } catch (error) {
//       setOutput("Error");
//     }
//   };

//   return (
//     <div className="calculator" style={{ textAlign: "center" }}>
//       <input type="text" value={input} style={{}}></input>
//       <div className="result">{output && <p>{output}</p>}</div>
//       <br />
//       <div className="buttons">
//         <button onClick={() => handleClick("7")}>7</button>
//         <button onClick={() => handleClick("8")}>8</button>
//         <button onClick={() => handleClick("9")}>9</button>
//         <button onClick={() => handleClick("+")}>+</button>

//         <button onClick={() => handleClick("4")}>4</button>
//         <button onClick={() => handleClick("5")}>5</button>
//         <button onClick={() => handleClick("6")}>6</button>
//         <button onClick={() => handleClick("-")}>-</button>

//         <button onClick={() => handleClick("1")}>1</button>
//         <button onClick={() => handleClick("2")}>2</button>
//         <button onClick={() => handleClick("3")}>3</button>
//         <button onClick={() => handleClick("*")}>*</button>

//         <button onClick={handleReset}>C</button>
//         <button onClick={() => handleClick("0")}>0</button>
//         <button onClick={handleEvaluate}>=</button>
//         <button onClick={() => handleClick("/")}>/</button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="result">{output}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (button, index) => (
            <button
              key={index}
              onClick={() =>
                button === "="
                  ? handleCalculate()
                  : button === "C"
                  ? handleClear()
                  : handleButtonClick(button)
              }
            >
              {button}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default App;
