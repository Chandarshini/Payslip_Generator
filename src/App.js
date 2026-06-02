import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import PayslipPreview from "./components/PayslipPreview";

function App() {
  const [employeeData, setEmployeeData] = useState(null);

  return (
    <div>
      <EmployeeForm setEmployeeData={setEmployeeData} />

      {employeeData && (
        <PayslipPreview employeeData={employeeData} />
      )}
    </div>
  );
}

export default App;