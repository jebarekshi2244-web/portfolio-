import {React,useState} from "react";
import './Login_task.css'

const Login_task=()=>{
    const[value,setValue]=useState({
        Email:"",
        Password:""
    })
    const[error,setError]=useState({
        Email:"",
        Password:""
    })
    function change(event){
        setValue({
            ...value,
          [event.target.name]:event.target.value
        }
        )
    }

     
    
  function handleSubmit(event){
    event.preventDefault();
    const newErrors = { 
        Email: "", 
        Password: "" 
    }

    if (value.Email === "") 
    {
      newErrors.Email = "*field is required";
    }
    else if (!value.Email.includes("@"))
     { 
         newErrors.Email = "* Enter a valid email"
     }
    if (value.Password === "") 
    {
      newErrors.Password = "*field is required";
    }

    setError(newErrors);    
        }

    return(
        <div className="login-page">
        <form onSubmit={handleSubmit} className="login-input">
         <h2>Welcome Back</h2>
        <p className="login-head">Login to continue</p>
        <div className="login-field">
        <label>Email</label><br/><input type="text" value={value.Email} onChange={change} placeholder=" email" name="Email"></input><br/>
        <span className="login-error">{error.Email}</span>
        </div>
        <div className="login-field">
        <label>Password</label><br/><input type="text" value={value.Password} onChange={change} placeholder=" Password" name="Password"></input><br/>
        <span className="login-error">{error.Password}</span><br/>
        <button type="submit" className="login-btn">Login</button>
        </div>
        </form>
        </div>
    )
}
export default Login_task