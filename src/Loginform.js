import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Loginform=()=>{

    const[data,setData]=useState(null)
     useEffect(()=>{
        axios.get("https://dummyjson.com/c/e2d7-5698-4370-bbf7")
        .then((res)=>{setData(res)})
    },[])

    const[form,setForm]=useState({
        username:"",
        password:""
    })
    const[error,setError]=useState({
        username:"",
        password:""
    })

    function change(event){
        setForm({
            ...form,
            [event.target.name]:event.target.value
       } )
    }
    function handleError(event){
        event.preventDefault()
        if(form.username==="")
        {
            setError(
               { 
                nameError:"*field is required"
            })
        }
        else if(data!==form.username)
        {
            setError({
                ...error,
                passwordError:"Invalid Email"
            })
        }
       
        if(form.password==="")
        {
            setError(
               { ...error,
              nameError:"*field is required"
            })
        }
        else if(data!==form.password)
        {
            setError({
                ...error,
                passwordError:"Invalid Password"
            })
        }
    }
  return (
    <div>
    <form onSubmit={handleError}>
    <input type='text' form={form.username} onChange={change} name="username" placeholder='enter your username'/><br/>
    <span>{error.username}</span><br/>
    <input type='text' form={form.password} onChange={change} name='Password' placeholder='enter your password'/><br/>
    <span>{error.password}</span><br/>
    <button type='submit'>submit</button>
    </form>
      
    </div>
  )
}

export default Loginform





