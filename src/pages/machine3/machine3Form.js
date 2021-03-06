import React, { useState } from "react";
import '../machine1/machine1Form.css';

function App() {
  const [f1, setf1] = useState('');
  const [f2, setf2] = useState('');
  const [p1, setp1] = useState('');
  const [p2, setp2] = useState('');
  const [s1, sets1] = useState('');
  const [s2, sets2] = useState('');
  const [speed, setSpeed] = useState('');

  function formulate() {
    setSpeed(120*f1/(p1-p2));
  }

  return (
    <div className="App">
      <h1 className='main-heading'>Provide specifications of machines to find speed (in radians).</h1>

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
          value={p1}
          onChange={(e) => setp1(+e.target.value)}
          placeholder="p1"
          className='boxes'
        />
        <input
          type="number"
          value={s1}
          onChange={(e) => sets1(+e.target.value)}
          placeholder="s1"
          className='boxes'
        />
      </div>
      <div className="number-inputs">
        <input
          type="number"
          value={f2}
          onChange={(e) => setf2(+e.target.value)}
          placeholder="f2"
          className='boxes'
        />
        <input
          type="number"
          value={p2}
          onChange={(e) => setp2(+e.target.value)}
          placeholder="p2"
          className='boxes'
        />
        <input
          type="number"
          value={s2}
          onChange={(e) => sets2(+e.target.value)}
          placeholder="s2"
          className='boxes'
        />
      </div>
      <button onClick={formulate} className='button'>Find Speed</button>

      <h2>{speed}</h2>


    </div>
  );
}

export default App;