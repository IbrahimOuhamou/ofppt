// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { useDispatch } from 'react-redux';

export default function Retrait() {
  const dispatch = useDispatch();

  return (<div>
    retrait: <input type="number" id="bismi_allah_retrait_input" />
    <button onClick={() => dispatch(
      {
        type: "retrait",
        montant: Number(document.getElementById("bismi_allah_retrait_input").value),
      }
    )}> bismi Allah: retrait </button>
  </div>);
}

