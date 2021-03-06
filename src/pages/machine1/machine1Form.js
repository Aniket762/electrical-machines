import React, { useState } from "react";
import './machine1Form.css';

function App() {
  const [f1, setf1] = useState('');
  const [s1, sets1] = useState('');
  const [p1, setp1] = useState('');
  const [p2, setp2] = useState('');
  const [speed, setSpeed] = useState('');

  function formulate() {
    setSpeed(f1*(1-s1)/p1);
  }

  return (
    <div className="App">
      <h1 className='main-heading'>Provide specifications of machines to find speed (in radians).</h1>
      <div className="specs">
      </div>
      <div className="number-inputs">
        <input
          type="number"
          value={f1}
          onChange={(e) => setf1(+e.target.value)}
          placeholder="f1"
          className='boxes'
        />
        <input
          type="number"
          value={s1}
          onChange={(e) => sets1(+e.target.value)}
          placeholder="s1"
          className='boxes'
        />
        <input
          type="number"
          value={p1}
          onChange={(e) => setp1(+e.target.value)}
          placeholder="p1"
          className='boxes'
        />
        <input
          type="number"
          value={p2}
          onChange={(e) => setp2(+e.target.value)}
          placeholder="p2"
          className='boxes'
        />
      </div>

      <button onClick={formulate} className='button'>Find Speed</button>

      <h2>{speed}</h2>


    </div>
  );
}

export default App;