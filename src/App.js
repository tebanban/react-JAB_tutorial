import React from 'react';
import Target from './components/target'  
import Header from './components/header'  
import State1 from './components/state1'
import Counter  from './components/counter';
import Roller from './components/roller';
import Memory from './components/memory';
                          


const App = () => {
  return <div>
  <Header />
  <Roller />
  <Memory/>
  <Target/>
  <State1/>
  <Counter/>
                    
  </div>; 
};

export default App;
