import React,{useState} from "react";
import './Test.css';
import task from './assets/task.png';

const Test=()=>{
    const[theme,setTheme]=useState(0);
    const[form,setForm]=useState({
        Task_name:"",
        Description:""   
    });
    const[value,setValue]=useState({
        Task_name:"project work",
        Description:"complete the mini project work"
    })
     function change(event){
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
     }
     function submit(e){
            e.preventDefault();
            setForm({
                ...form,
                Task_name:value.Task_name,
                Description:value.Description
            })
        }
     function handleTheme(){
        setTheme(theme===0?1:0);
     }

    return(
        <>
       <div className={theme === 0 ? "light" : "dark"}>
       
        <form onSubmit={submit}>
            <div className="top">
                 <img src={task} style={{width:'3%',height:'70%',marginRight:'210vh'}}></img>
                 <h3 style={{marginTop:'-3%',marginLeft:'-80%',paddingTop:'10px'}}>TASK MANAGER</h3> 
            <button className="theme" onClick={handleTheme} >{theme === 0 ? "Light Mode" : "Dark Mode"} Light/Dark</button><br/>
            </div>
            <div className="addbox">
                <h4 style={{marginTop:'1%'}}>Add New Task</h4>
           <label  style={{marginLeft:'-5vh'}}>Task_name:</label> <input onChange={change} name={'Task_name'} ></input><br/>
           <label style={{marginLeft:'-5vh'}}>Description:</label> <input onChange={change} name={'Description'}style={{marginBottom:'4%',marginLeft:'0%'}}></input><br/>
           <button className="add">+ Add Task</button>
            </div>
           
        </form>
        </div>
        </>
    )

}
export default Test;