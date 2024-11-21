// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
export default function Evenements(props) {
  const events = props.events;

  let cout_total = events.reduce((total, event) => total + (event.durée * event.cout_journalier), 0);
  let rows = events.map((event) => <tr>
    <td>{ event.thème }</td>
    <td>{ event.date_debut }</td>
    <td>{ event.date_fin }</td>
    <td>{ event.description }</td>
    <td>{ event.cout_journalier } DH</td>
    <td>{ event.durée }</td>
    <td>{ event.durée * event.cout_journalier } DH</td>
  </tr>);

  return (<table>
    <tr>
      <th>Théme</th>
      <th>Date de debut</th>
      <th>Date de fin</th>
      <th>Desription</th>
      <th>Cout journalier</th>
      <th>Durée (jours)</th>
      <th>Cout total d'evenement</th>
    </tr>
    {rows}
    <tr> <td colSpan="7">Total des couts des evenements assures: {cout_total} DH</td></tr>
  </table>);
};
