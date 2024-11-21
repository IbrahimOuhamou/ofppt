// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
import './App.css';

import { useRef, useState } from 'react';

function App() {

  const x = useRef(0);
  const y = useRef(0);
  const [result, setResult] = useState(0);

  function sum() {
    let bismi_allah_a = Number.parseInt(x.current.value);
    let bismi_allah_b = Number.parseInt(y.current.value);
    setResult(bismi_allah_a + bismi_allah_b);
  }

  return (
    <div className="App">
      <main>
        <div>
          <input type="text" ref={x}/> <br />
          + <br />
          <input type="text" ref={y}/> <br />
          <button onClick={sum}>bismi Allah</button> <br />
          <span style={{color : result < 0 ? "red" : "blue"}}>{result} | {result > 0 ? "accepte" : "refuse"}</span>
        </div>
      </main>
    </div>
  );
}

export default App;
