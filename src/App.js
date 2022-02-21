import React from 'react';
import Header from './components/header'  
import State1 from './components/state1'
import Counter  from './components/counter';
import Roller from './components/roller';
import Match from './components/match';
import MemoGame from './components/memogame';
import Changer from './components/target';
import Exchange from './components/exchange';
                          


const App = () => {
  return <div>
  <Header />
  <Roller />
  <Match />
  <MemoGame/>
  <Exchange/>
  <Changer/>
  <State1/>
  <Counter/>
                    
  </div>; 
};

export default App;
