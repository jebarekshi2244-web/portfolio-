import{ React,useState} from "react";
import './Project.css';

const Project=()=>{
     const[form,setForm]=useState({
            Name:"",
            Age:0,
            Department:"",
            Id:0
        });
    const[value,setValue]=useState({
            Name:"Jebarekshi",
            Age:20,
            Department:"CSE",
            Id:101
        });
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
                Name:value.Name,
                Age:value.Age
            })
        }
        

    return(
        <div>
          {form.Name}
          {form.Age}
            

            <form onSubmit={submit}>
           <label> Name: </label> <input onChange={change} name={'Name'}></input><br/>
           <label>Department: </label><input /><br />
           <label>Age: </label><input onChange={change} name={'Age'}/><br />
    



                <button type="submit">submit</button>
                
            </form>
        </div>
    )
}
export default Project;

