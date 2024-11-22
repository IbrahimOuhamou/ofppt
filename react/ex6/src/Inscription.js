// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import { useRef, useState } from "react";

export default function Inscription() {

  const [message, setMessage] = useState('');
  const id = useRef(0);
  const mot_de_pass = useRef(0);
  const date_naissance = useRef(0);
  const ville = useRef(0);
  const homme = useRef(0);
  const loisir_quran = useRef(0);
  const loisir_sport = useRef(0);
  const loisir_lecture = useRef(0);
  const photo = useRef(0);

  return (<form>
    <h1>Formulaire de l'evenement</h1>
    <span>id:</span> <input type="text" ref={id} /> <br/>
    <span>mot de pass:</span> <input type="password" ref={mot_de_pass}/> <br/>
    <span>date de naissance:</span> <input type="date" ref={date_naissance}/> <br/>
    <span>Ville:</span> <select ref={ville}><option>Casa</option><option>Rabat</option></select> <br/>
    <span>genre:</span> <input type="radio" value="homme" ref={homme}/>Homme <input type="radio" value="femme"/>Femme <br/>
    <span>Loisirs:</span> <input type="checkbox" ref={loisir_quran} /> Quran
      <input type="checkbox" ref={loisir_sport} /> Sport
      <input type="checkbox" ref={loisir_lecture} /> Lecture
      <br/>
    <span>Photo</span> <input type="file" value="choisire un fichier" ref={photo}/> <span>Aucun fichier choisi</span>
    <button type="button" onClick=
      {() => setMessage(
        "Je suis" + id.current.value + " né le " + date_naissance.current.value +
        " at " + ville.current.value + " et mes loisirs sont" + loisir_quran.current.checked ? loisir_quran.current.value : ""
      )}
    >bismi Allah</button>
    <p>{message}</p>
  </form>);
}
