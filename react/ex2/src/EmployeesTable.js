// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import EmployeeTableRow from './EmployeeTableRow';

export default function EmployeesCards(props) {
  const data = props.data;
  return <div>
    <h2>list des employes</h2> <br/>
    <table className="table-employees">
      <tr>
        <td>photo</td>
        <td>Nom</td>
        <td>Prenom</td>
        <td>Salaire(€)</td>
        <td>Grade</td>
        <td>Echelle</td>
      </tr>
      {data.map((e) => <EmployeeTableRow employee={e}></EmployeeTableRow>)}
    </table>
  </div>
}

