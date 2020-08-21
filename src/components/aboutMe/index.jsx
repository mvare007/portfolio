import React from 'react';
import Typed from 'react-typed';

import './index.scss';

const profilePic = "https://avatars1.githubusercontent.com/u/58235374?s=460&u=71026b20f119072d052405895f7335cc20d296a0&v=4";

const AboutMe = () => {
  return(
    <div className="profile">
      <div className="intro">
        <img
          className="profilePic"
          src={profilePic}
          alt="Marco"/>
        <h1 className="headline">Hello, I'm <strong className="name">Marco Varela</strong>.</h1>
        <Typed
           className="headline2"
           strings={['I\'am a full stack web developer based in Lisbon.']}
           typeSpeed={20}/>
        <button className="btn">My Projects ➡</button>
      </div>
    </div>
  );
}

export default AboutMe;
