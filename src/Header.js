import {React,useState} from "react";
function Header()
{
    const Ctime = new Date().toLocaleTimeString();
    console.log(Ctime);
    const [status,setStatus]=useState("");
    if(Ctime<="4:05:00 " && status=="grey")
    {
        setStatus("grey")
    }
    
    
    return(
           <>
           <div style={{width:"100%",height:"100vh",backgroundcolor:status}}>
           Header React
           {status}
           <button disable={status="grey"?true:false}>test</button>

           </div>
           
           </> 
    )
}
export default Header