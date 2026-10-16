import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from './StudentCard'


function App() {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users ")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  
  return (
    <div style={{display:"-ms-flexbox"}}>
    {details.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}

    </div>
  
    

  );
}

export default App;