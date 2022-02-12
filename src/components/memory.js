import React  from 'react';
import octopuss1 from '../images/octopuss1.png';
import alien1 from '../images/alien-pngrepo-com(1).png'
import alien2 from '../images/alien-pngrepo-com(2).png'
import alien3 from '../images/alien-pngrepo-com(3).png'
import alien4 from '../images/alien-pngrepo-com(4).png'
import alien5 from '../images/alien-pngrepo-com(5).png'
import alien6 from '../images/alien-pngrepo-com(6).png'
import alien7 from '../images/alien-pngrepo-com(7).png'
import alien8 from '../images/alien-pngrepo-com(8).png'
import alien9 from '../images/alien-pngrepo-com(9).png'
                             

function Memory() {
    //const[pic,setPic]=useState(octopuss1);
    const pics=[alien1,alien2,alien3,alien4,alien5,alien6,alien7,alien8,alien9]

    const imgChange1=(e)=>{

        e.target.src.includes(octopuss1) ? e.target.src=(pics[(Math.floor(Math.random() * (8 - 0)) + 0)]) : e.target.src=octopuss1      
   } 


  return (
    <div>
        <h3>Memory Game</h3>
        <row>
        <img alt='octo' src={octopuss1} onClick={imgChange1} className='image' />
        <img alt='octo' src={octopuss1} onClick={imgChange1} className='image' />
        <img alt='octo' src={octopuss1} onClick={imgChange1} className='image' />
        <img alt='octo' src={octopuss1} onClick={imgChange1} className='image' />
        <img alt='octo' src={octopuss1} onClick={imgChange1} className='image' />
        </row>
    </div>
  )
}

export default Memory