import { useRef } from "react";
import "../App.css";

const Exchange = () => {
  const refBox=useRef();

  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
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
  refBox.current.innerText=Number(refBox.current.innerText* 1)
}

  return (
    <>
        <label htmlFor="u0">Euro</label>
        <input onChange={euroConvert}  id="u0" type="number"/> 
        <div ref={refBox}>result</div>
    </> 
  )
}

export default Exchange;




