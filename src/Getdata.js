import { React, useState ,useEffect,} from "react"
import axios from 'axios'

const Getdata=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/weather")
        .then((res)=>{setData(res.data)})
    },[])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                </tr>
            </thead>
            {data.map((i)=>{
                return(
                    <>
                    <tbody>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.id}</td>
                    </tbody>
                    </>
                )
            })}
        </table>
      
    </div>
  )

}
export default Getdata
