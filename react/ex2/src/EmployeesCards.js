// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

import EmployeeCard from "./EmployeeCard";

export default function EmployeesCards(props) {
  const data = props.data;
  return <div>
    <h2>list des employes</h2> <br/>
    <div className="list-cards">
      {data.map((e) => <EmployeeCard employee={e}></EmployeeCard>)}
    </div>
  </div>
}

