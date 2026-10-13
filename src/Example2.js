import React from "react";
const Example2 =()=>{
    const students=
        {
            Name:"Jebarekshi",
            Age:20,
            Department:"CSE",
            Id:101
        },
        {
            Name:"Sandhiya",
            Age:19,
            Department:"CSE",
            Id:102
        },
        {
            Name:"Sri",
            Age:19,
            Department:"AI&DS",
            Id:103
        },
        {
            Name:"Rithanya",
            Age:20,
            Department:"AI&DS",
            Id:104
        },
        {
            Name:"Hema",
            Age:20,
            Department:"EEE",
            Id:105
        },
        {
            Name:"kalai",
            Age:19,
            Department:"CSE",
            Id:106
        },
        {
            Name:"Elavarasi",
            Age:19,
            Department:"ECE",
            Id:107
        },
        {
            Name:"Jayasri",
            Age:19,
            Department:"AIML",
            Id:108
        },
        {
            Name:"Kirthika",
            Age:20,
            Department:"AIDS",
            Id:109
        },
        {
            Name:"Abi",
            Age:20,
            Department:"CSBS",
            Id:102
        },
    

    const{Name,Age, ...remains}=students

    const updateName={
        ...students,
        Name:"Priya"
    }
    console.log(remains)
    
    return(
        <>
          {remains.students}

          
        </>
    )
}
export default Example2;