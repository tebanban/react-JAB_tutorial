
import { useRef } from 'react';



function Target() {
  const refBox=useRef();
  const exchange=20;
  
  

  const sum=(e)=>{
    console.log(e);
    e.target.innerText=Number(e.target.innerText) +1;
    if (e.target.innerText >= 10) {
      e.target.innerText = 1
    }
  }

  const convert=()=>{
    refBox.current.innerText=Number(refBox.current.innerText)*exchange;
  }

  const textChange=(e)=>{
    refBox.current.innerText=e.target.value;
  }

  
  return (
    <div > 
        
        <div className='convert'>
          <input onChange={textChange}/>
          <div ref={refBox} className='box' onClick={sum}>1</div>
          <button onClick={convert}>Convert</button>
        </div>                  
    </div>
  );
}

export default Target;
