import React,{useState} from 'react'


function Dynamic() {
    const[colour,setColour]=useState('violet')
    
    function change(event){
        setColour(event.target.value)  
    }
  return (
    
    <div style={{backgroundColor:colour,height:"100vh"}}>
        <input type="text" value={colour} onChange={change} />
        <span>Current Color:{colour}</span>
    </div>
  )
}

export default Dynamic
