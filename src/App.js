import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import octopuss from './images/octopuss.png';
import octopuss2 from './images/octopuss2.jpg';

function App() {
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

  const imgChange=(i)=>{
    i.target.src = octopuss2
  }

  const textChange=(e)=>{
    refBox.current.innerText=e.target.value;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={textChange}/>
        <div ref={refBox} className='box' onClick={sum}>1</div>
        <button onClick={convert}>Convert</button>
        <div><img alt='octo' src={octopuss} onClick={imgChange} className='image' /></div>
      </header>                            
    </div>
  );
}

export default App;
