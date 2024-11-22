// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import { useRef, useState } from "react";

export default function Formulaire() {

  const [message, setMessage] = useState('');
  const theme = useRef(0);
  const date_debut = useRef(0);
  const date_fin = useRef(0);
  const cout = useRef(0);
  const expert = useRef(0);

  return (<form>
    <h1>Formulaire de l'evenement</h1>
    <span>Theme:</span> <input type="text" ref={theme} /> <br/>
    <span>date de debut:</span> <input type="date" ref={date_debut}/> <br/>
    <span>date de fin:</span> <input type="date" ref={date_fin}/> <br/>
    <span>Cout:</span> <input type="number" ref={cout}/> <br/>
    <span>Expert:</span> <input type="text" ref={expert}/> <br/>
    <button type="button" onClick=
      {() => setMessage(
        "l'expert: " + expert.current.value + "assurant le theme: " + theme.current.value +
        ", avec un cout journalier: " + cout.current.value + " DH. pour une duree de : " +
        ((date_fin.current.valueAsNumber - date_debut.current.valueAsNumber) / (1000 * 60 * 60 * 24)) + 
        " jours, soit un cout total de: " +
        (cout.current.value * ((date_fin.current.valueAsNumber - date_debut.current.valueAsNumber) / (1000 * 60 * 60 * 24))) + "DH"
      )}
    >bismi Allah</button>
    <p>{message}</p>
  </form>);
}
