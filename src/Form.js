import React,{useState} from "react";
import clgimage from './assets/clgimage.png';
import './Form.css';


function Form(){
      const[value,setValue]=useState(
            {
                name:"",
                email:"",
                mobile :"",
                age:"",
                gender:"",
                address:"",
                registerno:"",
                community:"",
                parentno:"",
                firstgraduate:"",
                department:""
            }
        )
        const[error,setError]=useState(
            {
                nameError:"",
                emailError:"",
                mobileError:"",
                age:"",
                gender:"",
                address:"",
                registerno:"",
                community:"",
                parentno:"",
                firstgraduate:"",
                department:""
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
    return (
    <div className="form-background">
        <h1 className="side">LEARN &<br/>DISCOVER.</h1>

        <div className="form-container">

     <h2>Online Admission Enquiry - 2026</h2>
            

            <form onSubmit={handleSubmit}>
                <div className="seperate">
                    <div className="r1">

                <label>Name</label><br/>
                <input type="text" name="name" value={value.name} onChange={change} placeholder="name" /><br/>
                <span>{error.name}</span>

                <label>Email</label><br/>
                <input type="email" name="email" value={value.email} onChange={change} placeholder="email" /><br/>
                <span>{error.email}</span>

                <label>Mobile Number</label><br/>
                <input type="number" name="mobile" value={value.mobile} onChange={change} placeholder="mobile number" /><br/>
                <span>{error.mobile}</span>

                <label>Age</label><br/>
                <input type="number" name="age" value={value.age} onChange={change} placeholder="Enter your age" /><br/>
                <span>{error.age}</span>

                <label>Gender</label><br/>
                <select name="gender" value={value.gender} onChange={change}><br/><br/>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <span>{error.gender}</span>

                <label>Address</label><br/>
                <textarea name="address" value={value.address} onChange={change} placeholder="Enter your address" /><br/>
                
                <span>{error.address}</span>
                </div>
                <div className="r2">
                <label>Register Number[+2/Diploma/UG]</label><br/>
                <input type="number" name="registerno" value={value.registerno} onChange={change} placeholder="Register Number" /><br/>
                <span>{error.registerno}</span>
                
                

                <label>Community</label><br/>
                <select name="community" value={value.community} onChange={change}><br/>
                    <option value="">Select community</option>
                    <option value="BC">BC</option>
                    <option value="MBC">MBC</option>
                    <option value="Other">Other</option>
                </select>
                <span>{error.community}</span>

                <label>Parent Mobile Number</label><br/>
                <input type="number" name="parentno" value={value.parentno} onChange={change} placeholder="Parent Mobile number" /><br/>
                <span>{error.parentno}</span>

                <label>First Graduate</label><br/>
                <select name="firstgraduate" value={value.firstgraduate} onChange={change}><br/>
                    <option value="">Select community</option>
                    <option value="Yes">BC</option>
                    <option value="NoC">MBC</option>
                </select>
                <span>{error.firstgraduate}</span>

                

                <label>Department</label><br/>
                <input type="text" name="department" value={value.department} onChange={change} placeholder="Enter department" /><br/>
                <span>{error.department}</span>
                </div>
                </div>

                <button type="submit">Apply</button>

            </form>
        </div>
    </div>
);

}


export default Form;