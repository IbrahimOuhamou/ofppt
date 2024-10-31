// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

export default function EmployeeCard(props) {
  const employee = props.employee;
  return (<div className="card-employee">
    <img src={employee.photo} alt={employee.nom} />
    <p>{employee.nom}</p>
    <p>Salaire: <b>€{employee.salaire}</b></p>
    <p>Grade: <b>{employee.grade}</b></p>
    <p>Echelle: <b>{employee.echelle}</b></p>
  </div>)
}

