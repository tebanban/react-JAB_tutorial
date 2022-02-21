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

                             

function MemoGame() {
    //const[pic,setPic]=useState(octopuss1);
    const pics=[alien1,alien2,alien3,alien4,alien5,alien6,alien7,alien8,alien9];

    function shuffle() {
      var m = pics.length, t, i;
      
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = pics[m];
        pics[m] = pics[i];
        pics[i] = t;
      }
    
      return pics;
    }
    //new shuffled array, random every time
    const shuffled= shuffle(pics)

  return (
    <div>
        <h3>Memo Game</h3>
        <div className='memoContainer'>
          <div className='memoLayout'>{shuffled.map((index)=>{
            return(
              <div className='memoCard'>
              <img alt='drawing' src={octopuss1} className='image' onClick={(e)=>(e.target.src.includes('octopuss1')? e.target.src=index : e.target.src=octopuss1)}/>
              </div>
              )})}
          </div>
        </div>  
    </div>
  )
}

export default MemoGame