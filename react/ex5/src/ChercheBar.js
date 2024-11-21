// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import { useState } from "react";

export default function ChercheBar(props) {
  const ref = props.ref;

  const [state, setState] = useState(0);

  alert('ref is: ' + ref.current.value);

  return (<div>
    <h1>composant ChercheBar</h1>
    <p>Entrer le mot clé de recherche</p>
    <input type="text" ref={ref} /> <br />
    <button onClick={()=>setState(12)}>chercher</button>
  </div>);
}
