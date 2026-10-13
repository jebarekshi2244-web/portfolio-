import { useState } from "react";
import './Accordion.css';

const Accordion=()=>{
    const[open,setOpen]=useState(null)
    const accor=[
        {id:1,title: "accordion1", para:"paragraph1"},
        {id:2,title: "accordion2", para:"paragraph2"}
    ]
    function handleId(id){
        console.log(id)
        setOpen(id)
    }
    
    return(
        <>
        
        {/* <p className='head'>Accordion_1</p><br />
          <p> The middle pleated section that expands and collapses to control the airflow.</p><br />
          <p className='head'>Accordion_2</p><br />
          <p> Features piano-style keys or buttons used to play the main melody.</p><br />
         */}
         {accor.map((res)=>{
            return(
                <>
                <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                {open==res.id?<p>{res.para}</p>:""}
                </>
            )
         })}
         
         </>
        )
    }
export default Accordion;