// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { useDispatch } from 'react-redux';

export default function DepotSolde() {
  const dispatch = useDispatch();

  return (<div>
    montant: <input type="number" id="bismi_allah_depot_input"/>
    <button type="button" onClick={()=>dispatch(
      {
        type: "depot",
        montant: Number(document.getElementById("bismi_allah_depot_input").value)
      }
    )}>bismi Allah: depot</button>
  </div>);
}

