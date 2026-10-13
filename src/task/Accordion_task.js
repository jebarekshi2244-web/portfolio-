import {React,useState,useEffect} from "react";
import axios from "axios";
import './Accordion_task.css'

const Accordion_task=()=>{
     const [data,setData]=useState([])
     const[openId,setOpenId]=useState(null)

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/cef7-3fd8-4562-8a80")
        .then((res)=>{setData(res.data)})
    },[])
    function handleId(id){
       setOpenId(openId === id ? null : id);
    }
    return (
        <>
        <center>
        <div className="faq-page">
            <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            {data.map((item)=>(
                <div key={item.id}>
                    <button onClick={()=>handleId(item.id)}className="faq-question">{item.title}
                    <span className="faq-icon">{openId===item.id?"▲":"▼"}</span></button>
                    {openId===item.id && (<p className="faq-answer">{item.para}</p>)}
                    </div>
            ))}
            </div>
        </div>
        </center>


        </>
    )
}

export default Accordion_task;