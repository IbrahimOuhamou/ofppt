// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

import { useSelector } from 'react-redux';

export default function AfficheSolde() {
  return (<div>
    <h3>votre solde est: {useSelector( (state) => state.solde )}</h3>
  </div>);
}

