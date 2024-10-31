// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
import React, { useRef, useState } from "react";
 
export default function Inscription() {
  const [information, setInformation] = useState("");
 
  function envoyer() {
      const nom = document.getElementById("bismi_allah_nom").value;
      const prenom = document.getElementById("bismi_allah_prenom").value;
      setInformation(`Nom: ${nom}, Prénom: ${prenom}`);
  }
 
  return (<div>
      <h2>Inscription</h2>
      <div>
        <label>Nom:</label>
        <input type="text" id="bismi_allah_nom"/>
      </div>

      <div>
        <label>Prénom:</label>
        <input type="text" id="bismi_allah_prenom"/>
      </div>
        
      <button onClick={envoyer}>Afficher</button>
      <p>{information}</p>
  </div>);
}
