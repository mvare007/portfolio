import React from 'react';
import ParticlesBg from 'particles-bg';
import Scrollspy from 'react-scrollspy'

import './App.scss';
import AboutMe from './components/aboutMe';
import ProjectList from './components/projectList';
import Skills from './components/mySkills';
import SocialMedia from './components/socialMedia';
import Circles from './components/circles';


const App = () => {
  return (
    <div className="App">
      <section id="about">
        <ParticlesBg
          type="cobweb"
          color="#404448"
          num={160}
          bg={true} />
        <AboutMe/>
      </section>
      <hr/>
      <section id="projects">
        <ProjectList/>
      </section>
      <hr/>
      <section id="skills">
        <Skills/>
      </section>
      <section id="contact">

      </section>
      <Scrollspy
        className="sidebar"
        items={ ['about', 'projects', 'skills', 'contact'] }
        currentClassName="is-current">
         <li><a href="#about">About</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#contact">Contact</a></li>
       </Scrollspy>
    </div>
  );
}

export default App;
