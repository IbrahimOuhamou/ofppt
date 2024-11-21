// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import Evenements from './Evenements';

export default function Expert(props) {
  const expert = props.expert;

  return (<li>
    {expert.nom_complet}
    <Evenements events={expert.événements}></Evenements>
  </li>);
}

