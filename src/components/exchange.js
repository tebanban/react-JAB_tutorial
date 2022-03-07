import { useState } from "react";
import "../App.css";

const Exchange = () => {
  const[result, setResult]=useState(0);
  
  const cambios=[
    {
      moneda: "Euro",
      cambio:2.33,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

const euroConvert= (e)=>{
 
  setResult(e.target.value * cambios[0].cambio)
}

  return (
    <div>  
        <h3>CURRENCY CONVERTER</h3>
        <input onChange={euroConvert}  id="u0" type="number" />
        <label htmlFor="u0" >{cambios[0].moneda}</label>
        <input readOnly type="integer" value={result}></input>
    </div> 
  )
}

export default Exchange;




