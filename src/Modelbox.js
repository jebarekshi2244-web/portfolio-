import {React,useState} from'react'
import './Modelbox.css'
import phone1 from './assets/phone1.png';

const Modelbox=()=>{
    return (<>
    <div className='img-box'>
    
        <span>X</span>
        <img src={phone1} 
        style={{width:'60vh',height:'40vh',marginRight:'2vh',marginLeft:'-100%',marginTop:'-20vh'}}
        />
        <p className='he1'><h2>Secure all your devices</h2></p><br/>
        {/* <p className='he2'>Ensure your mobile phone,laptop,and other <br/> <span>devices are protected online.</span>
        </p>
        // Inside your component */}
<p style={{ textAlign: 'center', width: '414%', margin: '0 auto' ,marginLeft:'-148%'}}>
  Ensure your mobile phone, laptop, and other <br /> devices are protected online.
</p>

        <button><b>Purchase Premium</b></button>
        </div> 
    </>
  )

}
  


export default Modelbox
