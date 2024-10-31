// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah
import './App.css';

import EmployeesData from './EmployeesData';
import EmployeesCards from './EmployeesCards';
import EmployeesTable from './EmployeesTable';
import { useState } from 'react';

function App() {

  const [show_table, setShowTable] = useState(false);

  const Employees = show_table ? <EmployeesTable data={EmployeesData}></EmployeesTable> : <EmployeesCards data={EmployeesData}></EmployeesCards>;

  return (<div className="App">
      <main>
        <div>
          <input type="checkbox" id="bismi_allah" onChange={() => setShowTable(!show_table)}/>
          <label for="bismi_allah">Show table</label>
        </div>

        {Employees}

      </main>
    </div>
  );
}

export default App;
