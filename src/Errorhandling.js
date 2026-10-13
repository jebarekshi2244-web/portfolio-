import React,{useState} from "react";


function Errorhandling({data}){
    console.log(data);
    const[value,setValue]=useState(
        {
            name:"",
            email:"",
            mobile:"",
        }
    )
    const[error,setError]=useState(
        {
            nameError:"",
            emailError:"",
            mobileError:"",
        }
    )
    function change(event){
        setValue(
            {
                ...value,
                [event.target.name]:event.target.value
            }
        )
    }
    function handleSubmit(event){
        event.preventDefault();
        if(value.name==""){
            setError({
                ...error,
                nameError:" *field is required"
            })
        }
        else if(value.name.length<3)
        {
            setError({
                ...error,
                nameError:"Less than 3 letters"
            })
        }
    }
    return(
        <div style={{display:"flex"}}>
            {productObj.map(item)=>{
                return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder=" Name" name="name" onChange={change}></input><br/>
                <span style={{color:'red',marginLeft:'-30%'}}>{error.nameError}</span><br/>
                 <input type="email" placeholder=" Email" name="email" onChange={change}></input><br/>
                  <input type="number" placeholder=" mobile" name="mobile" onChange={change}></input><br/>
                  <button>submit</button>
            </form>
        </div>
    )
    )
}

export default Errorhandling;