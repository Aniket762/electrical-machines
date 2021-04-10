import React, { useState } from "react";

function App() {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [total, setTotal] = useState(num1 + num2);

  function formulate() {
    setTotal(num1 + num2);
  }

  return (
    <div className="App">
      <div className="number-inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setnum1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setnum2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={formulate}>Get Speed</button>

      <h2>{total}</h2>


    </div>
  );
}

export default App;