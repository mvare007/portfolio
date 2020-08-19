import React from 'react';
import ParticlesBg from 'particles-bg';
import Scrollspy from 'react-scrollspy'

import './App.scss';
import Circles from './components/circles';
import AboutMe from './components/aboutMe';
import SocialMedia from './components/socialMedia';
import ProjectList from './components/projectList';

const App = () => {
  return (
    <div className="App">
      <section id="section-1">
        <ParticlesBg
          type="cobweb"
          num={160}
          bg={true} />
        <AboutMe/>
      </section>
      <hr/>
      <section id="section-2">
        <ProjectList/>
      </section>
      <Scrollspy
        className="sidebar"
        items={ ['section-1', 'section-2'] }
        currentClassName="is-current">
         <li><a href="#section-1">About me</a></li>
         <li><a href="#section-2">Projects</a></li>
         <SocialMedia/>
       </Scrollspy>
    </div>
  );
}

export default App;
