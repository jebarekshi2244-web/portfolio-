import React,{useState,useEffect} from 'react';


const Counter=()=>{
    const[count,setCount]=useState(0)

    const btn={
            padding:"10px",
            borderRadius:"10px",
            color:"red"
            
            }
    useEffect(()=>{
       document.title="counter";
    },[])
    //  useEffect(()=>{
    //     console.log("counter button is pressed");
    // },[count])
    //  useEffect(()=>{
    //     setCount(22);
    // })
    function timeout(){
        setTimeout(
            ()=>{
                console.log("test")
            },1000
        );
    }
     function interval(){
        setInterval(
            ()=>{
               console.log("interval")
            },1000
        );
    }
    return(
        <div>
            <h1>Count:{count}</h1>
            <button style={btn} onClick={()=>setCount(count+1)}>Increment</button>
            <button style={btn} onClick={()=>setCount(count-1)}>Decrement</button>
            <button style={btn} onClick={()=>setCount(0)}>Reset</button>

            <button style={btn} onClick={(timeout)}>TIMEOUT</button>
            <button style={btn} onClick={(interval)}>INTERVAL</button>


        </div>
    )
}
export default Counter;