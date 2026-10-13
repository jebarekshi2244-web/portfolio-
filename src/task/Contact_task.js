import React,{useState} from "react";
import './Contact_task.css'


const Contact_task=()=>{
    const[details,setDetails]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    }
)
function change(event){
    setDetails({
        ...details,
        [event.target.name]:event.target.value

    })
}
function handleSubmit(event) {
    event.preventDefault();
    setDetails(
        { name: "",
          email: "", 
          subject: "", 
          message: "" 
        });
  }


    return(
        <div className="contact-page">

        <div className="con_form">
           
        <div className="contact-info">
        <h3>Contact Me</h3>
        <h4>Get In Touch</h4>
        <p>Have a Project in mind or wand<br/>to work together?<br/>Feel free to send me a message.</p>
        <span>📧 abc@gmail.com</span><br/>
        <span>📞 +91 9344868349</span><br/>
        <span>📍 TamilNadu,India</span>
        </div>
        
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text"   details={details.name}onChange={change} name="name" placeholder="Your Name" ></input>
                <input type="text"   details={details.email}onChange={change} name="email" placeholder="Your email" ></input>
                <input type="text"   details={details.subject}onChange={change} name="subject" placeholder="subject" ></input>
                <p><input type="text"   details={details.message}onChange={change} name="message" placeholder="Your message" ></input></p>
                <button className="contact-btn">Send Message ➤</button>
            </form>
        </div>
        </div>
       
    )
}
export default Contact_task;