// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
import { useRef, useState } from 'react';
import './App.css';

import ResultatList from './ResultatList';
import ChercheBar from './ChercheBar';
import list from './data';

function App() {

  const input_ref = useRef(0);
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <main>
        <div>
          <h1>Composant App</h1>
          <ChercheBar ref={input_ref} func={setState}></ChercheBar>
          <p>le type: <b>{input_ref.current.value}</b></p>
          <ResultatList value={input_ref} list={list}></ResultatList>
        </div>
      </main>
    </div>
  );
}

export default App;
