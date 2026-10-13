import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Projects_task.css';

const Projects_task=()=> {
  const [project,setProject]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/7869-b3bf-4f68-a10c")
        .then((res)=>{setProject(Array.isArray(res.data) ? res.data : res.data.Project || []);})
       
    },[])

  return (
    <div className='project-page'>
      <div className='project-container'>
      <h1 className='project-title'>My Project</h1>
      <div className='project-grid'>
      {project.map((item) => (
        <div key={item.id} className='project-card'>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className='project-btn'>View Project ➜</span>
        </div>
      ))}
       </div>
      </div>
      
    </div>
  )
}

export default Projects_task;