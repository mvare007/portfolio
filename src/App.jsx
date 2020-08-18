import React from 'react';
import ParticlesBg from 'particles-bg';

import './App.scss';

import Circles from './components/circles';
import Profile from './components/profile';

const App = () => {
  return (
    <div className="App">
      <ParticlesBg
        type="cobweb"
        num={120}
        bg={true} />
      <Profile/>
    </div>
  );
}

export default App;
