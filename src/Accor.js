import React,{ useState } from "react";



const Accor=()=>{
    const[open,setOpen]=useState(null);
    acc=[
        {id:1,title:'accor1',para:'paragraph_1'},
        {id:2,title:'accor2',para:'paragraph_2'}
    ]
    
    function handleId(){
        setOpen{id}
    }


    return(
        <>
        {
            acc.map((res)=>{
                return(
                  <p>onClick={</p>  
                )
            })
        }
        </>
    )
}
export default Accor;