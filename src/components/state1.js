import React, { useState } from "react";


function State1() {
    const [name,setName]= useState( 'Logan');
    const names = ['Carlos', 'Juan', 'Lucas', 'Logan', 'Ester']
   
    const changeName=()=>{
        setName(names[(Math.floor(Math.random() * (5 - 0)) + 0)]);
       
    }
    //console.log(`Inicio: ${name}`);           
  return (
      <div>
        <div>{name}</div>
        <button onClick={changeName}>Change Random</button>
      </div>
      );
}

export default State1;
