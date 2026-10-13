import React, { useState } from "react";
const state=()=>{
const [value,setValue]=useState(0);
function changeNo(){
    setValue(2)
}

return(
    <>
      <h1>{value}</h1>
    </>
)
}
export default Example1;