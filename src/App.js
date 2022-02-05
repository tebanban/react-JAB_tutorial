import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import octopuss1 from './images/octopuss1.png';
import heart from './images/heart.png';
import club from './images/club.png';


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

  const imgChange=(j)=>{
    if (j.target.src.includes('octopuss')) {
      j.target.src=heart
    } else {
      j.target.src=octopuss1
    }
      console.log(j.target.src)
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
        <div><img alt='octo' src={octopuss1} onClick={imgChange} className='image' /></div>
        <div><img alt='octo' src={heart} onClick={imgChange} className='image' /></div>
        <div><img alt='octo' src={club} onClick={imgChange} className='image' /></div>
      </header>                            
    </div>
  );
}

export default App;
