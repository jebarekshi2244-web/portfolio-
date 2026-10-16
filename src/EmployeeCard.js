import EmployeeSkills from "./EmployeeSkills";
import Paper from '@mui/material/Paper';

function EmployeeCard({ employee }) {
  return (
    <div>
      <Paper elevation={0} style={{width:"30%",height:"10vh"}} >

      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
     
     </Paper>

    </div>
  );
}

export default EmployeeCard;