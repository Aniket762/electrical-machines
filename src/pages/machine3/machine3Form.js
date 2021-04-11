import React, { useState } from "react";
import './machines3Form.css';

function App() {
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [total, setTotal] = useState(num1 + num2);

  function formulate() {
    setTotal(num1 + num2);
  }

  return (
    <div className="App">
      <h1 className='main-heading'>Provide specifications of machines to find speed.</h1>
      <div className="number-inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setnum1(+e.target.value)}
          placeholder="0"
          className='boxes'
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setnum2(+e.target.value)}
          placeholder="0"
          className='boxes'
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setnum2(+e.target.value)}
          placeholder="0"
          className='boxes'
        />
      </div>

      <div className="number-inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setnum1(+e.target.value)}
          placeholder="0"
          className='boxes'
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setnum2(+e.target.value)}
          placeholder="0"
          className='boxes'
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setnum2(+e.target.value)}
          placeholder="0"
          className='boxes'
        />
      </div>
      <button onClick={formulate} className='button'>Get Speed</button>

      <h2>{total}</h2>


    </div>
  );
}

export default App;