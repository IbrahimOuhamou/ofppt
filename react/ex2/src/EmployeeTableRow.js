// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

export default function EmployeeTableRow(props) {
  const employee = props.employee;
  return (<tr className="tr-employee">
    <td><img src={employee.photo} alt={employee.nom} /></td>
    <td>{employee.nom}</td>
    <td>{employee.prenom}</td>
    <td>€{employee.salaire}</td>
    <td>{employee.grade}</td>
    <td>{employee.echelle}</td>
  </tr>)
}

