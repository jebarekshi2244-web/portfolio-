import { React, useState ,useEffect,} from "react"
import axios from 'axios'

const Getdata=()=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/5e0a-3a5e-4b68-ad08")
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
