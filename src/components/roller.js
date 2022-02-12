import React from 'react'
import octopuss1 from '../images/octopuss1.png';
import heart from '../images/heart.png';
import club from '../images/club.png';

function Roller() {
    const names=['octopuss','heart','club']

    const changeName=(f)=>{
        if (f.target.innerText==='clicked') {
          f.target.innerText=''
        } else {
          f.target.innerText='clicked'
        }
        
      }
    const imgChange=(j)=>{
        if (j.target.src.includes('octopuss')) {
          j.target.src=heart
        } else {
          j.target.src=octopuss1
        }
          console.log(j.target.src)
      }

  return (
    <div className='roller'>
        <div >
            <img alt='octo' src={octopuss1} onClick={imgChange} className='image' />
            <div onClick={changeName}>{names[0]}</div>
          </div>
          <div>
            <img alt='octo' src={heart} onClick={imgChange} className='image' />
            <div onClick={changeName}>{names[1]}</div>
          </div>
          <div>
            <img alt='octo' src={club} onClick={imgChange} className='image' />
            <div onClick={changeName}>{ names[2]}</div>
        </div>
    </div>
  )
}

export default Roller