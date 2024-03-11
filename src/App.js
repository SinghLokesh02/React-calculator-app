import { useState } from 'react';
import './App.css';



const App = () => {
  // useState hook
  const [val, setVal] = useState("0");

  const setData = (data) => {
    if (data === "=") {
      const result = eval(val);
      setVal(result.toString());
    } else if (data === "C") {
      setVal("0");
    } else {
      if (val === "0") setVal(data.toString());
      else setVal(val + data);
    }
  };

  return (
    <div className="container">
      <div className="main-heading">
        <h1 id="heading">Calculator Using React</h1>
      </div>
      <div className="calculator">
        <div className="output">
          <input type="text" name="" id="" placeholder={val} readOnly />
        </div>
        <div className="calculator-btns">
          <div className="btn-row row1">
            <button onClick={() => setData(7)}>7</button>
            <button onClick={() => setData(8)}>8</button>
            <button onClick={() => setData(9)}>9</button>
            <button onClick={() => setData("+")}>+</button>
          </div>
          <div className="btn-row row2">
            <button onClick={() => setData(4)}>4</button>
            <button onClick={() => setData(5)}>5</button>
            <button onClick={() => setData(6)}>6</button>
            <button onClick={() => setData("-")}>-</button>
          </div>
          <div className="btn-row row3">
            <button onClick={() => setData(1)}>1</button>
            <button onClick={() => setData(2)}>2</button>
            <button onClick={() => setData(3)}>3</button>
            <button onClick={() => setData("*")}>x</button>
          </div>
          <div className="btn-row row4">
            <button className="red" onClick={() => setData("C")}>C</button>
            <button onClick={() => setData(0)}>0</button>
            <button onClick={() => setData("=")}>=</button>
            <button onClick={() => setData("/")}>÷</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
