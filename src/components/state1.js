import React, { useState } from "react";


function State1() {
    const [name,setName]= useState( 'Logan');
   
    const changeName=()=>{
        setName('Hulk');
        console.log(name)
    }
    console.log(`Inicio: ${name}`);           
  return (
      <div>
        <div>{name}</div>
        <button onClick={changeName}>Change</button>
      </div>
      );
}

export default State1;
