import React from "react";
import {Routes,Route,Link} from "react-router"
import Skills_task from "./Skills_task";
import Contact_task from "./Contact_task";
import Accordion_task from "./Accordion_task";
import About_task from "./About_task";
import Login_task from "./Login_task";
import Projects_task from "./Projects_task";
import './Home_task.css'

function Home_task(){
          const data=[{
                id:"24CS096",
                name:"JEBAREKSHI",
                username:"jebarekshi",
                contact:"9344868349",
                email:"jebarekshi2244@gmail.com",
                role:"student",
                skills:["Java","C programming" ,"UI&UX designing"],
                location:"Salem",
                about:"",
                projects:[{
                    Title:"ComplyAI",
                    Description:"In this project we combine the different portals and schemes into a  single system"
                },{
                 Title:"Lost&Found system",
                    Description:"In this project we combine the different portals and schemes into a  single system"
                },
            ],
                social:{},
                accordion:[{}]
          }]

    return(
        <div className="nav">
    
       
        <Routes>
        <Route path='/Contact_task' element={<Contact_task/>}/>
        <Route path='/Login_task' element={<Login_task/>}/>
        <Route path='/Accordion_task' element={<Accordion_task/>}/>
        <Route path='/Projects_task' element={<Projects_task/>}/>
        <Route path='/Skills_task' element={<Skills_task/>}/>
        <Route path='/About_task' element={<About_task/>}/>
        </Routes>
       
        
        
        <Link to='./Contact_task'>Contact</Link><br/>
        <Link to='./Login_task'>Login</Link><br/>
        <Link to='./Accordion_task'>Accordion</Link><br/>
        <Link to='./Projects_task'>Projects</Link><br/>
        <Link to='./Skills_task'>Skills</Link><br/>
        <Link to='./About_task'>About</Link>
     
        </div>
    )
}
export default Home_task;